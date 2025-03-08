# README

## Deutsch

### Überblick
Dieses Repository enthält ein Node.js-Skript, das die Spieleranzahl mehrerer Server abfragt und die entsprechenden Discord-Channel-Namen automatisch aktualisiert. Das Skript nutzt dabei die Discord.js-Bibliothek sowie eine RCON-API.

### Voraussetzungen
- Node.js (empfohlen: Version 16 oder höher)
- Ein gültiger Discord-Bot-Token (DISCORD_TOKEN)
- Ein gültiger RCON-API-Token (API_TOKEN)
- Konfigurierte Umgebungsvariablen (.env-Datei)
  - DISCORD_TOKEN
  - API_TOKEN
  - FLAG_YELLOW
  - FLAG_GREEN
  - UPDATE_INTERVAL_SECONDS (optional, Standardwert 300)

### Installation
1. Repository klonen oder herunterladen.
2. Im Projektverzeichnis eine `.env`-Datei erstellen und die erforderlichen Variablen eintragen (siehe oben).
3. Führe den Befehl `npm install` aus, um die Abhängigkeiten zu installieren.

### Verwendung
1. Starte das Skript mit `node main.mjs`.
2. Der Bot meldet sich bei Discord an und aktualisiert in regelmäßigen Abständen die Namen der angegebenen Discord-Kanäle basierend auf der Spieleranzahl.
3. Die Spielserver-URLs, zugehörigen Discord-Kanäle und weitere Einstellungen findest du in `config.mjs`. Passe sie an deine Bedürfnisse an.

### Logging
- Das Skript verwendet Winston, um Log-Nachrichten in der Konsole auszugeben.
- Standardmäßig wird auf `debug`-Ebene geloggt. Du kannst das bei Bedarf anpassen.

### Lizenz
Dieses Projekt steht unter der [MIT License](https://opensource.org/licenses/MIT). Du darfst es frei verwenden, verändern und verteilen.

---

## English

### Overview
This repository contains a Node.js script that queries multiple servers for their player count and automatically updates corresponding Discord channel names. It uses the Discord.js library and an RCON API.

### Requirements
- Node.js (recommended: version 16 or higher)
- A valid Discord Bot Token (DISCORD_TOKEN)
- A valid RCON API Token (API_TOKEN)
- Configured environment variables (.env file)
  - DISCORD_TOKEN
  - API_TOKEN
  - FLAG_YELLOW
  - FLAG_GREEN
  - UPDATE_INTERVAL_SECONDS (optional, default 300)

### Installation
1. Clone or download this repository.
2. Create a `.env` file in the project directory and set the required variables (see above).
3. Run `npm install` to install dependencies.

### Usage
1. Start the script with `node main.mjs`.
2. The bot will log in to Discord and periodically update the specified Discord channel names based on the player counts.
3. You can find the server URLs, the corresponding Discord channels, and other settings in `config.mjs`. Adjust them to your needs.

### Logging
- This script uses Winston for console logging.
- It defaults to the `debug` level. You can change this if needed.

### License
This project is available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it.
