import React from 'react';

const UninstallVSC = () => {
  return (
    <div>
        <p> How to completely uninstall VSCode on Mac</p>

        <p>1. Close and Quit VSCode</p>
        <p>2. Remove VScode from Applications (just go to Finder -> Applications and move VSCode to Bin)</p>
        <p>3.	Execute these commands in any order. The paths might be slightly different for you.</p>
        <p>rm -fr ~/.vscode*</p>
        <p>rm -fr ~/Library/Application\ Support/Code/</p>

        <p>rm -fr ~/Library/Saved\ Application\ State/com.microsoft.VSCode.savedState/</p>
        <p>rm -fr ~/Library/Preferences/com.microsoft.VSCode.helper.plist </p>
        <p>rm -fr ~/Library/Preferences/com.microsoft.VSCode.plist </p>
        <p>rm -fr ~/Library/Caches/com.microsoft.VSCode</p>
        <p>rm -fr ~/Library/Caches/com.microsoft.VSCode.ShipIt/</p>
    </div>
  )
}

export default UninstallVSC