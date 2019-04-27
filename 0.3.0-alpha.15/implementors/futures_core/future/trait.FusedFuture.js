(function() {var implementors = {};
implementors["futures_core"] = [];
implementors["futures_test"] = [{text:"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> + <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a>&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_test/future/struct.PendingOnce.html\" title=\"struct futures_test::future::PendingOnce\">PendingOnce</a>&lt;Fut&gt;",synthetic:false,types:["futures_test::future::pending_once::PendingOnce"]},];
implementors["futures_util"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Empty.html\" title=\"struct futures_util::future::Empty\">Empty</a>&lt;T&gt;",synthetic:false,types:["futures_util::future::empty::Empty"]},{text:"impl&lt;F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Lazy.html\" title=\"struct futures_util::future::Lazy\">Lazy</a>&lt;F&gt;",synthetic:false,types:["futures_util::future::lazy::Lazy"]},{text:"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"enum\" href=\"futures_util/future/enum.MaybeDone.html\" title=\"enum futures_util::future::MaybeDone\">MaybeDone</a>&lt;Fut&gt;",synthetic:false,types:["futures_util::future::maybe_done::MaybeDone"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Ready.html\" title=\"struct futures_util::future::Ready\">Ready</a>&lt;T&gt;",synthetic:false,types:["futures_util::future::ready::Ready"]},{text:"impl&lt;Fut&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Flatten.html\" title=\"struct futures_util::future::Flatten\">Flatten</a>&lt;Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#associatedtype.Output\" title=\"type core::future::future::Future::Output\">Output</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,&nbsp;</span>",synthetic:false,types:["futures_util::future::flatten::Flatten"]},{text:"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Fuse.html\" title=\"struct futures_util::future::Fuse\">Fuse</a>&lt;Fut&gt;",synthetic:false,types:["futures_util::future::fuse::Fuse"]},{text:"impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Map.html\" title=\"struct futures_util::future::Map\">Map</a>&lt;Fut, F&gt;",synthetic:false,types:["futures_util::future::map::Map"]},{text:"impl&lt;Fut1, Fut2, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Then.html\" title=\"struct futures_util::future::Then\">Then</a>&lt;Fut1, Fut2, F&gt;",synthetic:false,types:["futures_util::future::then::Then"]},{text:"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> + <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a>, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Inspect.html\" title=\"struct futures_util::future::Inspect\">Inspect</a>&lt;Fut, F&gt;",synthetic:false,types:["futures_util::future::inspect::Inspect"]},{text:"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a>&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.UnitError.html\" title=\"struct futures_util::future::UnitError\">UnitError</a>&lt;Fut&gt;",synthetic:false,types:["futures_util::future::unit_error::UnitError"]},{text:"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a>&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.NeverError.html\" title=\"struct futures_util::future::NeverError\">NeverError</a>&lt;Fut&gt;",synthetic:false,types:["futures_util::future::never_error::NeverError"]},{text:"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/future/struct.Shared.html\" title=\"struct futures_util::future::Shared\">Shared</a>&lt;Fut&gt;",synthetic:false,types:["futures_util::future::shared::Shared"]},{text:"impl&lt;Fut1, Fut2, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_future/struct.AndThen.html\" title=\"struct futures_util::try_future::AndThen\">AndThen</a>&lt;Fut1, Fut2, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut1: <a class=\"trait\" href=\"futures_core/future/trait.TryFuture.html\" title=\"trait futures_core::future::TryFuture\">TryFuture</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut2: <a class=\"trait\" href=\"futures_core/future/trait.TryFuture.html\" title=\"trait futures_core::future::TryFuture\">TryFuture</a>&lt;Error = Fut1::<a class=\"type\" href=\"futures_core/future/trait.TryFuture.html#associatedtype.Error\" title=\"type futures_core::future::TryFuture::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(Fut1::<a class=\"type\" href=\"futures_core/future/trait.TryFuture.html#associatedtype.Ok\" title=\"type futures_core::future::TryFuture::Ok\">Ok</a>) -&gt; Fut2,&nbsp;</span>",synthetic:false,types:["futures_util::try_future::and_then::AndThen"]},{text:"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a>, E&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_future/struct.ErrInto.html\" title=\"struct futures_util::try_future::ErrInto\">ErrInto</a>&lt;Fut, E&gt;",synthetic:false,types:["futures_util::try_future::err_into::ErrInto"]},{text:"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a>&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_future/struct.IntoFuture.html\" title=\"struct futures_util::try_future::IntoFuture\">IntoFuture</a>&lt;Fut&gt;",synthetic:false,types:["futures_util::try_future::into_future::IntoFuture"]},{text:"impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_future/struct.MapErr.html\" title=\"struct futures_util::try_future::MapErr\">MapErr</a>&lt;Fut, F&gt;",synthetic:false,types:["futures_util::try_future::map_err::MapErr"]},{text:"impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_future/struct.MapOk.html\" title=\"struct futures_util::try_future::MapOk\">MapOk</a>&lt;Fut, F&gt;",synthetic:false,types:["futures_util::try_future::map_ok::MapOk"]},{text:"impl&lt;Fut1, Fut2, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_future/struct.OrElse.html\" title=\"struct futures_util::try_future::OrElse\">OrElse</a>&lt;Fut1, Fut2, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut1: <a class=\"trait\" href=\"futures_core/future/trait.TryFuture.html\" title=\"trait futures_core::future::TryFuture\">TryFuture</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut2: <a class=\"trait\" href=\"futures_core/future/trait.TryFuture.html\" title=\"trait futures_core::future::TryFuture\">TryFuture</a>&lt;Ok = Fut1::<a class=\"type\" href=\"futures_core/future/trait.TryFuture.html#associatedtype.Ok\" title=\"type futures_core::future::TryFuture::Ok\">Ok</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(Fut1::<a class=\"type\" href=\"futures_core/future/trait.TryFuture.html#associatedtype.Error\" title=\"type futures_core::future::TryFuture::Error\">Error</a>) -&gt; Fut2,&nbsp;</span>",synthetic:false,types:["futures_util::try_future::or_else::OrElse"]},{text:"impl&lt;Fut, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_future/struct.UnwrapOrElse.html\" title=\"struct futures_util::try_future::UnwrapOrElse\">UnwrapOrElse</a>&lt;Fut, F&gt;",synthetic:false,types:["futures_util::try_future::unwrap_or_else::UnwrapOrElse"]},{text:"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a>, C&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Collect.html\" title=\"struct futures_util::stream::Collect\">Collect</a>&lt;St, C&gt;",synthetic:false,types:["futures_util::stream::collect::Collect"]},{text:"impl&lt;St, Fut, T, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Fold.html\" title=\"struct futures_util::stream::Fold\">Fold</a>&lt;St, Fut, T, F&gt;",synthetic:false,types:["futures_util::stream::fold::Fold"]},{text:"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.TryStream.html\" title=\"trait futures_core::stream::TryStream\">TryStream</a>, Si:&nbsp;<a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&lt;St::<a class=\"type\" href=\"futures_core/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_core::stream::TryStream::Ok\">Ok</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Forward.html\" title=\"struct futures_util::stream::Forward\">Forward</a>&lt;St, Si&gt;",synthetic:false,types:["futures_util::stream::forward::Forward"]},{text:"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a>, Fut, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.ForEach.html\" title=\"struct futures_util::stream::ForEach\">ForEach</a>&lt;St, Fut, F&gt;",synthetic:false,types:["futures_util::stream::for_each::ForEach"]},{text:"impl&lt;St&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.StreamFuture.html\" title=\"struct futures_util::stream::StreamFuture\">StreamFuture</a>&lt;St&gt;",synthetic:false,types:["futures_util::stream::into_future::StreamFuture"]},{text:"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a>, '_&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Next.html\" title=\"struct futures_util::stream::Next\">Next</a>&lt;'_, St&gt;",synthetic:false,types:["futures_util::stream::next::Next"]},{text:"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a>, '_&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.SelectNextSome.html\" title=\"struct futures_util::stream::SelectNextSome\">SelectNextSome</a>&lt;'_, St&gt;",synthetic:false,types:["futures_util::stream::select_next_some::SelectNextSome"]},{text:"impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/stream/struct.ForEachConcurrent.html\" title=\"struct futures_util::stream::ForEachConcurrent\">ForEachConcurrent</a>&lt;St, Fut, F&gt;",synthetic:false,types:["futures_util::stream::for_each_concurrent::ForEachConcurrent"]},{text:"impl&lt;St:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a>, '_&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_stream/struct.TryNext.html\" title=\"struct futures_util::try_stream::TryNext\">TryNext</a>&lt;'_, St&gt;",synthetic:false,types:["futures_util::try_stream::try_next::TryNext"]},{text:"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a>, C&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_stream/struct.TryCollect.html\" title=\"struct futures_util::try_stream::TryCollect\">TryCollect</a>&lt;St, C&gt;",synthetic:false,types:["futures_util::try_stream::try_collect::TryCollect"]},{text:"impl&lt;St, Fut, T, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_stream/struct.TryFold.html\" title=\"struct futures_util::try_stream::TryFold\">TryFold</a>&lt;St, Fut, T, F&gt;",synthetic:false,types:["futures_util::try_stream::try_fold::TryFold"]},{text:"impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/try_stream/struct.TryForEachConcurrent.html\" title=\"struct futures_util::try_stream::TryForEachConcurrent\">TryForEachConcurrent</a>&lt;St, Fut, F&gt;",synthetic:false,types:["futures_util::try_stream::try_for_each_concurrent::TryForEachConcurrent"]},{text:"impl&lt;T, '_&gt; <a class=\"trait\" href=\"futures_core/future/trait.FusedFuture.html\" title=\"trait futures_core::future::FusedFuture\">FusedFuture</a> for <a class=\"struct\" href=\"futures_util/lock/struct.MutexLockFuture.html\" title=\"struct futures_util::lock::MutexLockFuture\">MutexLockFuture</a>&lt;'_, T&gt;",synthetic:false,types:["futures_util::lock::mutex::MutexLockFuture"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
