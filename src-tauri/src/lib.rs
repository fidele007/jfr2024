use std::path::PathBuf;

#[tauri::command]
fn get_executable_dir_path() -> Result<PathBuf, String> {
    match std::env::current_exe() {
        Ok(path) => {
            if let Some(path_str) = path.to_str() {
                if path_str.contains(".app/Contents/MacOS") {
                    // /Applications/JFR 2024.app/Contents/MacOS/jfr2024
                    return Ok(path.parent().unwrap().parent().unwrap().parent().unwrap().parent().unwrap().to_path_buf());
                }
            }

            return Ok(path.parent().unwrap().to_path_buf());
        },
        Err(error) => return Err(format!("{error}")),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![get_executable_dir_path])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
