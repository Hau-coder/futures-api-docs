initSidebarItems({"fn":[["empty","Creates a stream which contains no elements."],["iter","Converts an `Iterator` into a `Stream` which is always ready to yield the next value."],["once","Creates a stream of single element"],["poll_fn","Creates a new stream wrapping around a function returning `Poll`."],["repeat","Create a stream which produces the same item repeatedly."],["select_all","Convert a list of streams into a `Stream` of results from the streams."],["unfold","Creates a `Stream` from a seed and a closure returning a `Future`."]],"mod":[["futures_unordered","An unbounded set of futures."]],"struct":[["BufferUnordered","Stream for the `buffer_unordered` method."],["Buffered","Stream for the `buffered` method."],["CatchUnwind","Stream for the `catch_unwind` method."],["Chain","Stream for the `chain` method."],["Chunks","Stream for the `chunks` method."],["Collect","Future for the `collect` method."],["Concat","Future for the `concat` method."],["Empty","Stream for the [`empty`] function."],["Filter","Stream for the `filter` method."],["FilterMap","Stream for the `filter_map` method."],["Flatten","Stream for the `flatten` method."],["Fold","Future for the `fold` method."],["ForEach","Future for the `for_each` method."],["ForEachConcurrent","Future for the `for_each_concurrent` method."],["Forward","Future for the `forward` method."],["Fuse","Stream for the `fuse` method."],["FuturesOrdered","An unbounded queue of futures."],["FuturesUnordered","A set of futures which may complete in any order."],["Inspect","Stream for the `inspect` method."],["Iter","Stream for the [`iter`] function."],["Map","Stream for the `map` method."],["Next","Future for the `next` method."],["Once","A stream which emits single element and then EOF."],["Peekable","A `Stream` that implements a `peek` method."],["PollFn","Stream for the [`poll_fn`] function."],["Repeat","Stream for the [`repeat`] function."],["ReuniteError","Error indicating a `SplitSink<S>` and `SplitStream<S>` were not two halves of a `Stream + Split`, and thus could not be `reunite`d."],["Select","Stream for the `select` method."],["SelectAll","An unbounded set of streams"],["SelectNextSome","Future for the `select_next_some` method."],["Skip","Stream for the `skip` method."],["SkipWhile","Stream for the `skip_while` method."],["SplitSink","A `Sink` part of the split pair"],["SplitStream","A `Stream` part of the split pair"],["StreamFuture","Future for the `into_future` method."],["Take","Stream for the `take` method."],["TakeWhile","Stream for the `take_while` method."],["Then","Stream for the `then` method."],["Unfold","Stream for the [`unfold`] function."],["Zip","Stream for the `zip` method."]],"trait":[["StreamExt","An extension trait for `Stream`s that provides a variety of convenient combinator functions."]]});