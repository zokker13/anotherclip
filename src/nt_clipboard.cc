#include <iostream>

#include <nan.h>
#include <Windows.h>

using namespace v8;

void SetText(const Nan::FunctionCallbackInfo<Value> &args) {

  Isolate *isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  if (!OpenClipboard(0)) {
    args.GetReturnValue().Set(Nan::False());
  } else {


    Nan::Utf8String origintext(args[0]->ToString());
    LPCWSTR text = (LPCWSTR)*origintext;
    std::wcout << "output: " << text << std::endl;
    EmptyClipboard();
    size_t textsize = origintext.length() + 1;

    HGLOBAL hclipboarddata = GlobalAlloc(NULL, textsize);

    if (hclipboarddata) {

      WCHAR *pchdata = (WCHAR *)GlobalLock(hclipboarddata);
      if (pchdata) {
        memcpy(pchdata, text, textsize);
        GlobalUnlock(hclipboarddata);
        SetClipboardData(CF_UNICODETEXT, hclipboarddata);
      }
    }

    CloseClipboard();
  }


}

void Init(Handle<Object> exports, Handle<Object> module) {
  Nan::SetMethod(exports, "SetText", SetText);
}

NODE_MODULE(SetText, Init)
