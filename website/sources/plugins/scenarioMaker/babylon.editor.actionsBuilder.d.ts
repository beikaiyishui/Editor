declare module BABYLON.EDITOR {
    interface IActionsBuilderProperty {
        name: string;
        value: string;
        targetType?: string;
    }
    interface IActionsBuilderElement {
        type: number;
        name: string;
        properties: IActionsBuilderProperty[];
    }
    interface IActionsBuilderSerializationObject extends IActionsBuilderElement {
        children: IActionsBuilderSerializationObject[];
    }
    interface IActionsBuilderData {
        class: IDocEntry;
        data: IActionsBuilderElement;
    }
    enum EACTION_TYPE {
        TRIGGER = 0,
        ACTION = 1,
        CONTROL = 2,
    }
    class ActionsBuilder implements IEventReceiver, ITabApplication {
        private _core;
        private _babylonModule;
        private _actionsClasses;
        private _controlsClasses;
        private _containerElement;
        private _containerID;
        private _tab;
        private _layouts;
        private _triggersList;
        private _actionsList;
        private _controlsList;
        private _graph;
        private _currentSelected;
        private _parametersEditor;
        private static _Classes;
        /**
        * Constructor
        * @param mainToolbar: the main toolbar instance
        */
        constructor(core: EditorCore);
        onEvent(event: IEvent): boolean;
        /**
        * Disposes the application
        */
        dispose(): void;
        /**
        * Creates the UI
        */
        private _createUI();
        private _configureUI();
        private _onListElementClicked(list);
        private _onMouseUpOnGraph();
        private _configureActionsBuilderData(data, type);
        private _loadDefinitionsFile();
        private _getModule(name);
        private _getClasses(module, heritates?);
        private _getClass(classes, name);
    }
}
