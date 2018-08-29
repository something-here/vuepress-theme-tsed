---
sidebar: auto
---
# ISocketMiddlewareHandlerMetadata <Badge text="Interface" type="interface"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { ISocketMiddlewareHandlerMetadata }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/socketio"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.0/src//socketio/interfaces/ISocketMiddlewareHandlerMetadata.ts#L0-L0">/socketio/interfaces/ISocketMiddlewareHandlerMetadata.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


::: v-pre
<pre><code class="typescript-lang "><span class="token keyword">interface</span> ISocketMiddlewareHandlerMetadata <span class="token punctuation">{</span>
    parameters<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>key<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <a href="#api/socketio/isocketparammetadata"><span class="token">ISocketParamMetadata</span></a><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    returns?<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        type<span class="token punctuation">:</span> <a href="#api/socketio/socketreturnstypes"><span class="token">SocketReturnsTypes</span></a><span class="token punctuation">;</span>
        eventName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
:::


<!-- Members -->




## Members


<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang ">parameters<span class="token punctuation">:</span> <span class="token punctuation">{</span>
     <span class="token punctuation">[</span>key<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <a href="#api/socketio/isocketparammetadata"><span class="token">ISocketParamMetadata</span></a><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>
:::
</div>




***



<div class="method-overview">
::: v-pre
<pre><code class="typescript-lang ">returns?<span class="token punctuation">:</span> <span class="token punctuation">{</span>
     type<span class="token punctuation">:</span> <a href="#api/socketio/socketreturnstypes"><span class="token">SocketReturnsTypes</span></a><span class="token punctuation">;</span>
     eventName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>
:::
</div>