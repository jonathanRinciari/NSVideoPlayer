
declare class Player extends UIViewController {

	static alloc(): Player; // inherited from NSObject

	static new(): Player; // inherited from NSObject
}

declare var PlayerVersionNumber: number;

declare var PlayerVersionString: interop.Reference<number>;

declare class PlayerView extends UIView {

	static alloc(): PlayerView; // inherited from NSObject

	static appearance(): PlayerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PlayerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PlayerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PlayerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PlayerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): PlayerView; // inherited from UIAppearance

	static layerClass(): typeof NSObject;

	static new(): PlayerView; // inherited from NSObject
}
