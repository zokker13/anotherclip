{
  "targets": [
    {
      "target_name": "ntclipboard",
      "sources": [
        "src/nt_clipboard.cc"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
