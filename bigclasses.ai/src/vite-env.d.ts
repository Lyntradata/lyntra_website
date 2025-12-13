/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Google Analytics removed — no runtime VITE vars required here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}