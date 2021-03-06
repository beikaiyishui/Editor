declare module BABYLON.EDITOR {
    class ActionsBuilderParametersEditor {
        onSave: () => void;
        onRemove: () => void;
        onRemoveAll: () => void;
        private _core;
        private _container;
        private _guiElements;
        private _currentTarget;
        private _currentProperty;
        private _editors;
        /**
        * Constructor
        * @param core: the editor core
        * @param containerID: the div container ID
        */
        constructor(core: EditorCore, containerID: string);
        drawProperties(data: IActionsBuilderData): void;
        populateStringArray(array: string[], values: string[] | any[], property?: string): void;
        private _createField(property);
        private _createCheckbox(property, customText?);
        private _createListOfElements(property, items?, callback?);
        private _createEditor(property, defaultValue);
        private _createListOfOperators(property);
        private _createHeader(name, type);
        private _destroyGUIElements();
        private _getParameterType(entry, parameter);
        private _getEffectiveTarget(object, target);
        private _createPropertyPath(node, properties?);
        private _createSoundsList();
        private _createParticleSystemList();
        private _getCollectionOfObjects(type);
    }
}
