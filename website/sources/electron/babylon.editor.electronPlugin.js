var BABYLON;
(function (BABYLON) {
    var EDITOR;
    (function (EDITOR) {
        var ElectronMenuPlugin = (function () {
            /**
            * Constructor
            * @param mainToolbar: the main toolbar instance
            */
            function ElectronMenuPlugin(mainToolbar) {
                // Public members
                this.menuID = "ELECTRON-MENU";
                this._connectPhotoshop = "CONNECT-PHOTOSHOP";
                var toolbar = mainToolbar.toolbar;
                this._core = mainToolbar.core;
                // Create menu
                var menu = toolbar.createMenu("menu", this.menuID, "Electron", "icon-electron");
                // Create items
                toolbar.createMenuItem(menu, "button", this._connectPhotoshop, "Connect to Photoshop...", "icon-photoshop");
            }
            // When an item has been selected
            ElectronMenuPlugin.prototype.onMenuItemSelected = function (selected) {
                switch (selected) {
                    case this._connectPhotoshop:
                        EDITOR.ElectronPhotoshopPlugin.Connect(this._core);
                        break;
                    default: break;
                }
            };
            return ElectronMenuPlugin;
        }());
        EDITOR.ElectronMenuPlugin = ElectronMenuPlugin;
        // Register plugin
        if (EDITOR.Tools.CheckIfElectron())
            EDITOR.PluginManager.RegisterMainToolbarPlugin(ElectronMenuPlugin);
    })(EDITOR = BABYLON.EDITOR || (BABYLON.EDITOR = {}));
})(BABYLON || (BABYLON = {}));
