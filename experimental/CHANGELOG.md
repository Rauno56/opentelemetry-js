# CHANGELOG

All notable changes to experimental packages in this project will be documented in this file.

## Unreleased

### :boom: Breaking Change

### :rocket: (Enhancement)

### :bug: (Bug Fix)

### :books: (Refine Doc)

### :house: (Internal)

## 0.33.0

### :boom: Breaking Change

* Add `resourceDetectors` option to `NodeSDK` [#3210](https://github.com/open-telemetry/opentelemetry-js/issues/3210)
  * `NodeSDK.detectResources()` function is no longer able to receive config as a parameter.
    Instead, the detectors are passed to the constructor.

* chore(metrics-sdk): clean up exports [#3197](https://github.com/open-telemetry/opentelemetry-js/pull/3197) @pichlermarc
  * removes export for:
    * `AccumulationRecord`
    * `Aggregator`
    * `AggregatorKind`
    * `Accumulation`
    * `createInstrumentDescriptor`
    * `createInstrumentDescriptorWithView`
    * `isDescriptorCompatibleWith`
* chore(api-metrics): clean up exports [#3198](https://github.com/open-telemetry/opentelemetry-js/pull/3198) @pichlermarc
  * removes export for:
    * `NOOP_COUNTER_METRIC`
    * `NOOP_HISTOGRAM_METRIC`
    * `NOOP_METER_PROVIDER`
    * `NOOP_OBSERVABLE_COUNTER_METRIC`
    * `NOOP_OBSERVABLE_GAUGE_METRIC`
    * `NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC`
    * `NOOP_UP_DOWN_COUNTER_METRIC`
    * `NoopCounterMetric`
    * `NoopHistogramMetric`
    * `NoopMeter`
    * `NoopMeterProvider`
    * `NoopMetric`
    * `NoopObservableCounterMetric`
    * `NoopObservableGaugeMetric`
    * `NoopObservableMetric`
    * `NoopObservableUpDownCounterMetric`
    * `NoopUpDownCounterMetric`
* feat(sdk-metrics): align MetricReader with specification and other language implementations [#3225](https://github.com/open-telemetry/opentelemetry-js/pull/3225) @pichlermarc
* chore(sdk-metrics): remove accidental export of the SDK `Meter` class [#3243](https://github.com/open-telemetry/opentelemetry-js/pull/3243) @pichlermarc

### :rocket: (Enhancement)

* Add `resourceDetectors` option to `NodeSDK` [#3210](https://github.com/open-telemetry/opentelemetry-js/issues/3210)
* feat: add Logs API @mkuba [#3117](https://github.com/open-telemetry/opentelemetry-js/pull/3117)

### :books: (Refine Doc)

* docs(sdk-metrics): fix typos and add missing parameter docs. [#3244](https://github.com/open-telemetry/opentelemetry-js/pull/3244) @pichlermarc

### :house: (Internal)

* ci(instrumentation-http): improve metrics test stability [#3242](https://github.com/open-telemetry/opentelemetry-js/pull/3242) @pichlermarc
* deps: remove unused protobufjs and update used ones to 7.1.1 #3251 [#3251](https://github.com/open-telemetry/opentelemetry-js/pull/3251) @pichlermarc

## 0.32.0

### :boom: Breaking Change

* Rename @opentelemetry/sdk-metrics-base package to @opentelemetry/sdk-metrics  [#3162](https://github.com/open-telemetry/opentelemetry-js/pull/3162) @hectorhdzg

### :rocket: (Enhancement)

* feature(instrumentation-http): Add HTTP Server and Client duration Metrics in HTTP Node.js Instrumentation [#3149](https://github.com/open-telemetry/opentelemetry-js/pull/3149) @hectorhdzg
* fix(add-views-to-node-sdk): added the ability to define meter views in `NodeSDK` [#3066](https://github.com/open-telemetry/opentelemetry-js/pull/3124) @weyert
* feature(add-console-metrics-exporter): add ConsoleMetricExporter [#3120](https://github.com/open-telemetry/opentelemetry-js/pull/3120) @weyert
* feature(prometheus-serialiser): export the unit block when unit is set in metric descriptor [#3066](https://github.com/open-telemetry/opentelemetry-js/pull/3041) @weyert
* feat: support latest `@opentelemetry/api` [#3177](https://github.com/open-telemetry/opentelemetry-js/pull/3177) @dyladan
* feat(sdk-metrics-base): add per metric-reader aggregation support [#3153](https://github.com/open-telemetry/opentelemetry-js/pull/3153) @legendecas
* chore(deps): update prometheus example dependencies to 0.32 [#3126](https://github.com/open-telemetry/opentelemetry-js/pull/3216) @avzis
* feature(opentelemetry-api-metrics): Adding generics to `create{metricType}` [#3151](https://github.com/open-telemetry/opentelemetry-js/issues/3151) @tomerghelber-tm

### :bug: (Bug Fix)

* fix(instrumentation-http): add `http.host` attribute before sending the request #3054 @cuichenli

## 0.31.0

### :boom: Breaking Change

* feature(views): move views registration to MeterProvider constructor [#3066](https://github.com/open-telemetry/opentelemetry-js/pull/3066) @pichlermarc
* feat(sdk-metrics-base): split up Singular into Sum and Gauge in MetricData [#3079](https://github.com/open-telemetry/opentelemetry-js/pull/3079) @pichlermarc
  * removes `DataPointType.SINGULAR`, and replaces it with `DataPointType.SUM` and `DataPointType.GAUGE`
  * removes `SingularMetricData` and replaces it with `SumMetricData` (including an additional `isMonotonic` flag) and `GaugeMetricData`
* feat(histogram): align collection of optional Histogram properties with spec [#3102](https://github.com/open-telemetry/opentelemetry-js/pull/3079) @pichlermarc
  * changes type of `sum` property on `Histogram` to `number | undefined`
  * changes type of `min` and `max` properties on `Histogram` to `number | undefined`
  * removes `hasMinMax` flag on the exported `Histogram` - this is now indicated by `min` and `max` being `undefined`

### :rocket: (Enhancement)

* feat(metrics-api): use common attributes definitions #3038 @legendecas
* feat(otlp-proto): pre-compile proto files [#3098](https://github.com/open-telemetry/opentelemetry-js/pull/3098) @legendecas
* feat(opentelemetry-sdk-metrics-base): added InMemoryMetricExporter [#3039](https://github.com/open-telemetry/opentelemetry-js/pull/3039) @weyert

### :bug: (Bug Fix)

* fix(histogram): fix maximum when only values < -1 are provided [#3086](https://github.com/open-telemetry/opentelemetry-js/pull/3086) @pichlermarc
* fix(sdk-metrics-base): fix PeriodicExportingMetricReader keeping Node.js process from exiting
  [#3106](https://github.com/open-telemetry/opentelemetry-js/pull/3106) @seemk
* fix(otlp-proto): fixes [#2791](https://github.com/open-telemetry/opentelemetry-js/issues/2791) otlp proto exporters no longer share a single global proto definition
  [#3098](https://github.com/open-telemetry/opentelemetry-js/pull/3098) @legendecas

## 0.30.0

### :boom: Breaking Change

* fix: remove aws and gcp detector from SDK [#3024](https://github.com/open-telemetry/opentelemetry-js/pull/3024) @flarna
* feat(sdk-metrics-base): implement min/max recording for Histograms [#3032](https://github.com/open-telemetry/opentelemetry-js/pull/3032) @pichlermarc
  * adds `min`/`max` recording to Histograms
  * updates [opentelemetry-proto](https://github.com/open-telemetry/opentelemetry-proto) to `0.18` so that `min` and
    `max` can be exported. This change breaks the OTLP/JSON Metric Exporter for all collector versions `<0.52` due to
    [open-telemetry/opentelemetry-collector#5312](https://github.com/open-telemetry/opentelemetry-collector/issues/5312).

### :rocket: (Enhancement)

* feat(opentelemetry-instrumentation-fetch): optionally ignore network events [#3028](https://github.com/open-telemetry/opentelemetry-js/pull/3028) @gregolsen
* feat(http-instrumentation): record exceptions in http instrumentation [#3008](https://github.com/open-telemetry/opentelemetry-js/pull/3008) @luismiramirez
* feat(node-sdk): add serviceName config option [#2867](https://github.com/open-telemetry/opentelemetry-js/pull/2867) @naseemkullah
* feat(opentelemetry-exporter-prometheus): export PrometheusSerializer [#3034](https://github.com/open-telemetry/opentelemetry-js/pull/3034) @matschaffer
* feat(sdk-metrics-base): detect resets on async metrics [#2990](https://github.com/open-telemetry/opentelemetry-js/pull/2990) @legendecas
  * Added monotonicity support in SumAggregator.
  * Added reset and gaps detection for async metric instruments.
  * Fixed the start time and end time of an exported metric with regarding to resets and gaps.

### :bug: (Bug Fix)

* fix(otlp-transformer): remove type dependency on Long [#3022](https://github.com/open-telemetry/opentelemetry-js/pull/3022) @legendecas
* fix(grpc-exporter): use non-normalized URL to determine channel security [#3019](https://github.com/open-telemetry/opentelemetry-js/pull/3019) @pichlermarc
* fix(otlp-exporter-base): fix gzip output stream in http otlp export [#3046](https://github.com/open-telemetry/opentelemetry-js/pull/3046) @mattolson
* docs(grpc-exporters): remove 'web' as supported from README.md [#3070](https://github.com/open-telemetry/opentelemetry-js/pull/3070) @pichlermarc

### :house: (Internal)

* test: add node 18 and remove EoL node versions [#3048](https://github.com/open-telemetry/opentelemetry-js/pull/3048) @dyladan

## 0.29.2

* Support for 1.3.1 of stable packages

## 0.29.1

### :bug: (Bug Fix)

* fix(sdk-metrics-base): only record non-negative histogram values [#3002](https://github.com/open-telemetry/opentelemetry-js/pull/3002) @pichlermarc
* fix(otlp-transformer): include missing prepublishOnly script which ensures esm and esnext build files are created and packaged @dyladan

## 0.29.0

### :boom: Breaking Change

* feat(metrics): metric readers and exporters now select aggregation temporality based on instrument type [#2902](https://github.com/open-telemetry/opentelemetry-js/pull/2902) @seemk
* refactor(metrics-sdk): rename InstrumentationLibrary -> InstrumentationScope [#2959](https://github.com/open-telemetry/opentelemetry-js/pull/2959) @pichlermarc
* feat(metrics): multi-instrument async callback support [#2966](https://github.com/open-telemetry/opentelemetry-js/pull/2966) @legendecas
  * changes on `meter.createObservableCounter`, `meter.createObservableGauge`, `meter.createObservableUpDownCounter`
    * removed the second parameter `callback`
    * returns an `Observable` object on which callbacks can be registered or unregistered.
  * added `meter.addBatchObservableCallback` and `meter.removeBatchObservableCallback`.
* fix: remove attributes from OTLPExporterConfigBase [#2991](https://github.com/open-telemetry/opentelemetry-js/pull/2991) @flarna

### :rocket: (Enhancement)

* feat(exporters): update proto version and use otlp-transformer [#2929](https://github.com/open-telemetry/opentelemetry-js/pull/2929) @pichlermarc
* fix(sdk-metrics-base): misbehaving aggregation temporality selector tolerance [#2958](https://github.com/open-telemetry/opentelemetry-js/pull/2958) @legendecas
* feat(trace-otlp-grpc): configure security with env vars [#2827](https://github.com/open-telemetry/opentelemetry-js/pull/2827) @svetlanabrennan
* feat(sdk-metrics-base): async instruments callback timeout [#2742](https://github.com/open-telemetry/opentelemetry-js/pull/2742) @legendecas

### :bug: (Bug Fix)

* fix(opentelemetry-instrumentation-http): use correct origin when port is `null` [#2948](https://github.com/open-telemetry/opentelemetry-js/pull/2948) @danielgblanco
* fix(otlp-exporter-base): include esm and esnext in package files [#2952](https://github.com/open-telemetry/opentelemetry-js/pull/2952) @dyladan
* fix(otlp-http-exporter): update endpoint to match spec [#2895](https://github.com/open-telemetry/opentelemetry-js/pull/2895) @svetlanabrennan
* fix(instrumentation): only patch core modules if enabled [#2993](https://github.com/open-telemetry/opentelemetry-js/pull/2993) @santigimeno
* fix(otlp-transformer): include esm and esnext in package files and update README [#2992](https://github.com/open-telemetry/opentelemetry-js/pull/2992) @pichlermarc
* fix(metrics): specification compliant default metric unit [#2983](https://github.com/open-telemetry/opentelemetry-js/pull/2983) @andyfleming
* fix(opentelemetry-instrumentation): use all provided patches for the same file [#2963](https://github.com/open-telemetry/opentelemetry-js/pull/2963) @Ugzuzg

### :books: (Refine Doc)

### :house: (Internal)

## 0.28.0

### :boom: Breaking Change

* feat(sdk-metrics-base): update metric exporter interfaces [#2707](https://github.com/open-telemetry/opentelemetry-js/pull/2707) @srikanthccv
* feat(api-metrics): remove observable types [#2687](https://github.com/open-telemetry/opentelemetry-js/pull/2687) @legendecas
* fix(otlp-http-exporter): remove content length header [#2879](https://github.com/open-telemetry/opentelemetry-js/pull/2879) @svetlanabrennan
* feat(experimental-packages): Update packages to latest SDK Version. [#2871](https://github.com/open-telemetry/opentelemetry-js/pull/2871) @pichlermarc
  * removed the -wip suffix from api-metrics and metrics-sdk-base.
  * updated dependencies to stable packages to `1.1.1` for all "experimental" packages.
  * updated Metrics Exporters to the latest Metrics SDK (`exporter-metrics-otlp-grpc`, `exporter-metrics-otlp-http`, `exporter-metrics-otlp-proto`)
  * updated `opentelemetry-sdk-node` to the latest Metrics SDK.
  * updated `otlp-transformer` to the latest Metrics SDK.
  * updated all `instrumentation-*` packages to use local implementations of `parseUrl()` due to #2884
* refactor(otlp-exporters) move base classes and associated types into their own packages [#2893](https://github.com/open-telemetry/opentelemetry-js/pull/2893) @pichlermarc
  * `otlp-exporter-base` => `OTLPExporterBase`, `OTLPExporterBrowserBase`, `OTLPExporterNodeBase`
  * `otlp-grpc-exporter-base` => `OTLPGRPCExporterNodeBase`
  * `otlp-proto-exporter-base` => `OTLPProtoExporterNodeBase`

### :rocket: (Enhancement)

* feat: spec compliant metric creation and sync instruments [#2588](https://github.com/open-telemetry/opentelemetry-js/pull/2588) @dyladan
* feat(api-metrics): async instruments spec compliance [#2569](https://github.com/open-telemetry/opentelemetry-js/pull/2569) @legendecas
* feat(sdk-metrics-base): add ValueType support for sync instruments [#2776](https://github.com/open-telemetry/opentelemetry-js/pull/2776) @legendecas
* feat(sdk-metrics-base): implement async instruments support [#2686](https://github.com/open-telemetry/opentelemetry-js/pull/2686) @legendecas
* feat(sdk-metrics-base): meter registration [#2666](https://github.com/open-telemetry/opentelemetry-js/pull/2666) @legendecas
* feat(sdk-metrics-base): bootstrap metrics exemplars [#2641](https://github.com/open-telemetry/opentelemetry-js/pull/2641) @srikanthccv
* feat(metrics-sdk): bootstrap aggregation support [#2634](https://github.com/open-telemetry/opentelemetry-js/pull/2634) @legendecas
* feat(metrics-sdk): bootstrap views api [#2625](https://github.com/open-telemetry/opentelemetry-js/pull/2625) @legendecas
* feat(sdk-metrics): bootstrap metric streams [#2636](https://github.com/open-telemetry/opentelemetry-js/pull/2636) @legendecas
* feat(views): add FilteringAttributesProcessor [#2733](https://github.com/open-telemetry/opentelemetry-js/pull/2733) @pichlermarc
* feat(metric-reader): add metric-reader [#2681](https://github.com/open-telemetry/opentelemetry-js/pull/2681) @pichlermarc
* feat(sdk-metrics-base): document and export basic APIs [#2725](https://github.com/open-telemetry/opentelemetry-js/pull/2725) @legendecas
* feat(views): Update addView() to disallow named views that select more than one instrument. [#2820](https://github.com/open-telemetry/opentelemetry-js/pull/2820) @pichlermarc
* feat(sdk-metrics-base): update exporting names [#2829](https://github.com/open-telemetry/opentelemetry-js/pull/2829) @legendecas
* Add grpc compression to trace-otlp-grpc exporter [#2813](https://github.com/open-telemetry/opentelemetry-js/pull/2813) @svetlanabrennan
* refactor: unifying shutdown once with BindOnceFuture [#2695](https://github.com/open-telemetry/opentelemetry-js/pull/2695) @legendecas
* feat(prometheus): update prometheus exporter with wip metrics sdk [#2824](https://github.com/open-telemetry/opentelemetry-js/pull/2824) @legendecas
* feat(instrumentation-xhr): add applyCustomAttributesOnSpan hook [#2134](https://github.com/open-telemetry/opentelemetry-js/pull/2134) @mhennoch
* feat(proto): add @opentelemetry/otlp-transformer package with hand-rolled transformation [#2746](https://github.com/open-telemetry/opentelemetry-js/pull/2746) @dyladan
* feat(sdk-metrics-base): shutdown and forceflush on MeterProvider [#2890](https://github.com/open-telemetry/opentelemetry-js/pull/2890) @legendecas
* feat(sdk-metrics-base): return the same meter for identical input to getMeter [#2901](https://github.com/open-telemetry/opentelemetry-js/pull/2901) @legendecas
* feat(otlp-exporter): add [OTEL_EXPORTER_OTLP_TIMEOUT](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md#configuration-options) env var to otlp exporters [#2738](https://github.com/open-telemetry/opentelemetry-js/pull/2738) @svetlanabrennan
* feat(sdk-metrics-base): hoist async instrument callback invocations [#2822](https://github.com/open-telemetry/opentelemetry-js/pull/2822) @legendecas

### :bug: (Bug Fix)

* fix(sdk-metrics-base): remove aggregator.toMetricData dependency on AggregationTemporality [#2676](https://github.com/open-telemetry/opentelemetry-js/pull/2676) @legendecas
* fix(sdk-metrics-base): coerce histogram boundaries to be implicit Infinity [#2859](https://github.com/open-telemetry/opentelemetry-js/pull/2859) @legendecas
* fix(instrumentation-http): HTTP 400 status code should not set span status to error on servers [#2789](https://github.com/open-telemetry/opentelemetry-js/pull/2789) @nordfjord

### :books: (Refine Doc)

* Update metrics example [#2658](https://github.com/open-telemetry/opentelemetry-js/pull/2658) @svetlanabrennan
* docs(api-metrics): add notes on ObservableResult.observe [#2712](https://github.com/open-telemetry/opentelemetry-js/pull/2712) @legendecas

### :house: (Internal)

* chore: move trace exporters back to experimental [#2835](https://github.com/open-telemetry/opentelemetry-js/pull/2835) @dyladan
* refactor(sdk-metrics-base): meter shared states [#2821](https://github.com/open-telemetry/opentelemetry-js/pull/2821) @legendecas

## v0.27.0

### :boom: Breaking Change

* [#2566](https://github.com/open-telemetry/opentelemetry-js/pull/2566) feat!(metrics): remove batch observer ([@dyladan](https://github.com/dyladan))
* [#2485](https://github.com/open-telemetry/opentelemetry-js/pull/2485) feat!: Split metric and trace exporters into new experimental packages ([@willarmiros](https://github.com/willarmiros))
* [#2540](https://github.com/open-telemetry/opentelemetry-js/pull/2540) fix(sdk-metrics-base): remove metric kind BATCH_OBSERVER ([@legendecas](https://github.com/legendecas))
* [#2496](https://github.com/open-telemetry/opentelemetry-js/pull/2496) feat(api-metrics): rename metric instruments to match feature-freeze API specification ([@legendecas](https://github.com/legendecas))

### :rocket: (Enhancement)

* [#2523](https://github.com/open-telemetry/opentelemetry-js/pull/2523) feat: Rename Labels to Attributes ([@pirgeo](https://github.com/pirgeo))
* [#2559](https://github.com/open-telemetry/opentelemetry-js/pull/2559) feat(api-metrics): remove bind/unbind and bound instruments ([@legendecas](https://github.com/legendecas))
* [#2563](https://github.com/open-telemetry/opentelemetry-js/pull/2563) feat(sdk-metrics-base): remove per-meter config on MeterProvider.getMeter ([@legendecas](https://github.com/legendecas))

### :bug: (Bug Fix)

* [#2610](https://github.com/open-telemetry/opentelemetry-js/pull/2610) fix: preventing double enable for instrumentation that has been already enabled ([@obecny](https://github.com/obecny))
* [#2581](https://github.com/open-telemetry/opentelemetry-js/pull/2581) feat: lazy initialization of the gzip stream ([@fungiboletus](https://github.com/fungiboletus))
* [#2584](https://github.com/open-telemetry/opentelemetry-js/pull/2584) fix: fixing compatibility versions for detectors ([@obecny](https://github.com/obecny))
* [#2558](https://github.com/open-telemetry/opentelemetry-js/pull/2558) fix(@opentelemetry/exporter-prometheus): unref prometheus server to prevent process running indefinitely ([@mothershipper](https://github.com/mothershipper))
* [#2495](https://github.com/open-telemetry/opentelemetry-js/pull/2495) fix(sdk-metrics-base): metrics name should be in the max length of 63 ([@legendecas](https://github.com/legendecas))
* [#2497](https://github.com/open-telemetry/opentelemetry-js/pull/2497) feat(@opentelemetry-instrumentation-fetch): support reading response body from the hook applyCustomAttributesOnSpan ([@echoontheway](https://github.com/echoontheway))

### :books: (Refine Doc)

* [#2561](https://github.com/open-telemetry/opentelemetry-js/pull/2561) Use new canonical path to Getting Started ([@chalin](https://github.com/chalin))
* [#2576](https://github.com/open-telemetry/opentelemetry-js/pull/2576) docs(instrumentation): update links in the Readme ([@OlivierAlbertini](https://github.com/OlivierAlbertini))
* [#2600](https://github.com/open-telemetry/opentelemetry-js/pull/2600) docs: fix URLs in README post-experimental move ([@arbourd](https://github.com/arbourd))
* [#2579](https://github.com/open-telemetry/opentelemetry-js/pull/2579) doc: Move upgrade propagator notes to correct section ([@NathanielRN](https://github.com/NathanielRN))
* [#2568](https://github.com/open-telemetry/opentelemetry-js/pull/2568) chore(doc): update matrix with contrib version for 1.0 core ([@vmarchaud](https://github.com/vmarchaud))
* [#2555](https://github.com/open-telemetry/opentelemetry-js/pull/2555) docs: expose existing comments ([@moander](https://github.com/moander))
* [#2493](https://github.com/open-telemetry/opentelemetry-js/pull/2493) chore: remove getting started and link to documentation. ([@svrnm](https://github.com/svrnm))

### :house: (Internal)

* [#2404](https://github.com/open-telemetry/opentelemetry-js/pull/2404) chore: Fix lint warnings in instrumentation package ([@alisabzevari](https://github.com/alisabzevari))
* [#2533](https://github.com/open-telemetry/opentelemetry-js/pull/2533) chore: regularly close stale issues ([@Rauno56](https://github.com/Rauno56))
* [#2570](https://github.com/open-telemetry/opentelemetry-js/pull/2570) chore: adding selenium tests with browserstack ([@obecny](https://github.com/obecny))
* [#2522](https://github.com/open-telemetry/opentelemetry-js/pull/2522) chore: cleanup setting config in instrumentations ([@Flarna](https://github.com/Flarna))
* [#2541](https://github.com/open-telemetry/opentelemetry-js/pull/2541) chore: slim font size for section title in PR template ([@legendecas](https://github.com/legendecas))
* [#2509](https://github.com/open-telemetry/opentelemetry-js/pull/2509) chore: expand pull request template with action items ([@pragmaticivan](https://github.com/pragmaticivan))
* [#2488](https://github.com/open-telemetry/opentelemetry-js/pull/2488) chore: inline sources in source maps ([@dyladan](https://github.com/dyladan))
* [#2514](https://github.com/open-telemetry/opentelemetry-js/pull/2514) chore: update stable dependencies to 1.0 ([@dyladan](https://github.com/dyladan))

## Previous releases

For changelog entries for previous releases see the [CHANGELOG.md](../CHANGELOG.md).
