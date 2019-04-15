initSidebarItems({"fn":[["noop_waker","Create a new `Waker` which does nothing when `wake()` is called on it. The [`Waker`] can be converted into a [`Waker`] which will behave the same way."],["noop_waker_ref","Get a thread local reference to a `Waker` referencing a singleton instance of a [`Waker`] which panics when woken."],["waker_ref","Creates a reference to a `Waker` from a local `wake`."]],"struct":[["AtomicWaker","A synchronization primitive for task wakeup."],["WakerRef","A `Waker` that is only valid for a given lifetime."]],"trait":[["ArcWake","A way of waking up a specific task."],["LocalSpawnExt","Extension trait for `LocalSpawn`."],["SpawnExt","Extension trait for `Spawn`."]]});