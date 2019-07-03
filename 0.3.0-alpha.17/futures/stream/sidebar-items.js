initSidebarItems({"fn":[["empty","Creates a stream which contains no elements."],["iter","Converts an `Iterator` into a `Stream` which is always ready to yield the next value."],["once","Creates a stream of a single element."],["pending","Creates a stream which never returns any elements."],["poll_fn","Creates a new stream wrapping a function returning `Poll<Option<T>>`."],["repeat","Create a stream which produces the same item repeatedly."],["select","This function will attempt to pull items from both streams. Each stream will be polled in a round-robin fashion, and whenever a stream is ready to yield an item that item is yielded."],["select_all","Convert a list of streams into a `Stream` of results from the streams."],["unfold","Creates a `Stream` from a seed and a closure returning a `Future`."]],"mod":[["futures_unordered","An unbounded set of futures."]],"struct":[["AndThen","Stream for the `and_then` method."],["BufferUnordered","Stream for the `buffer_unordered` method."],["Buffered","Stream for the `buffered` method."],["CatchUnwind","Stream for the `catch_unwind` method."],["Chain","Stream for the `chain` method."],["Chunks","Stream for the `chunks` method."],["Collect","Future for the `collect` method."],["Concat","Future for the `concat` method."],["Empty","Stream for the [`empty`] function."],["Enumerate","Stream for the `enumerate` method."],["ErrInto","Stream for the `err_into` method."],["Filter","Stream for the `filter` method."],["FilterMap","Stream for the `filter_map` method."],["Flatten","Stream for the `flatten` method."],["Fold","Future for the `fold` method."],["ForEach","Future for the `for_each` method."],["ForEachConcurrent","Future for the `for_each_concurrent` method."],["Forward","Future for the `forward` method."],["Fuse","Stream for the `fuse` method."],["FuturesOrdered","An unbounded queue of futures."],["FuturesUnordered","A set of futures which may complete in any order."],["Inspect","Stream for the `inspect` method."],["InspectErr","Stream for the `inspect_err` method."],["InspectOk","Stream for the `inspect_ok` method."],["IntoAsyncRead","An `AsyncRead` for the `into_async_read` combinator."],["IntoStream","Stream for the `into_stream` method."],["Iter","Stream for the [`iter`] function."],["Map","Stream for the `map` method."],["MapErr","Stream for the `map_err` method."],["MapOk","Stream for the `map_ok` method."],["Next","Future for the `next` method."],["Once","A stream which emits single element and then EOF."],["OrElse","Stream for the `or_else` method."],["Peekable","A `Stream` that implements a `peek` method."],["Pending","Stream for the [`pending()`] function."],["PollFn","Stream for the [`poll_fn`] function."],["Repeat","Stream for the [`repeat`] function."],["ReuniteError","Error indicating a `SplitSink<S>` and `SplitStream<S>` were not two halves of a `Stream + Split`, and thus could not be `reunite`d."],["Select","Stream for the [`select()`] function."],["SelectAll","An unbounded set of streams"],["SelectNextSome","Future for the `select_next_some` method."],["Skip","Stream for the `skip` method."],["SkipWhile","Stream for the `skip_while` method."],["SplitSink","A `Sink` part of the split pair"],["SplitStream","A `Stream` part of the split pair"],["StreamFuture","Future for the `into_future` method."],["Take","Stream for the `take` method."],["TakeWhile","Stream for the `take_while` method."],["Then","Stream for the `then` method."],["TryBufferUnordered","Stream for the `try_buffer_unordered` method."],["TryCollect","Future for the `try_collect` method."],["TryFilterMap","Stream for the `try_filter_map` method."],["TryFold","Future for the `try_fold` method."],["TryForEach","Future for the `try_for_each` method."],["TryForEachConcurrent","Future for the `try_for_each_concurrent` method."],["TryNext","Future for the `try_next` method."],["TrySkipWhile","Stream for the `try_skip_while` method."],["Unfold","Stream for the [`unfold`] function."],["Zip","Stream for the `zip` method."]],"trait":[["FusedStream","A `Stream` or `TryStream` which tracks whether or not the underlying stream should no longer be polled."],["Stream","A stream of values produced asynchronously."],["StreamExt","An extension trait for `Stream`s that provides a variety of convenient combinator functions."],["TryStream","A convenience for streams that return `Result` values that includes a variety of adapters tailored to such futures."],["TryStreamExt","Adapters specific to `Result`-returning streams"]],"type":[["BoxStream","An owned dynamically typed [`Stream`] for use in cases where you can't statically type your result or need to add some indirection."]]});