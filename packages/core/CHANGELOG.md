# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## 0.0.12 - 2023-04-04

### Fixed

- Support recursive types in `m.call` args ([#186](https://github.com/NomicFoundation/ignition/issues/186))

## 0.0.11 - 2023-03-29

### Changed

- Replace `m.getBytesForArtifact("Foo")` with `m.getArtifact("Foo")` in the module api ([#155](https://github.com/NomicFoundation/ignition/issues/155))

### Fixed

- Fix libraries in plan ([#131](https://github.com/NomicFoundation/ignition/issues/131))

## 0.0.10 - 2023-03-14

### Added

- Make Hardhat network accounts available within modules ([#166](https://github.com/NomicFoundation/ignition/pull/166))

### Changed

- Show file/line/column against validation errors, so that module problems can more easily be traced back to the source code ([#160](https://github.com/NomicFoundation/ignition/pull/160))

## 0.0.9 - 2023-03-02

### Added

- Support defining modules in typescript ([#101](https://github.com/NomicFoundation/ignition/issues/101))
- Allow rerunning deployment while ignoring journal history through a `--force` flag ([#132](https://github.com/NomicFoundation/ignition/issues/132))

## 0.0.8 - 2023-02-16

### Changed

- Rename config option `gasIncrementPerRetry` to `gasPriceIncrementPerRetry` for clarity ([#143](https://github.com/NomicFoundation/ignition/pull/143))

### Fixed

- Ban passing async functions to `buildModule` ([#138](https://github.com/NomicFoundation/ignition/issues/138))

## 0.0.7 - 2023-01-31

### Fixed

- Resolve parameter args for deployed contracts during execution ([#125](https://github.com/NomicFoundation/ignition/pull/125))

## 0.0.6 - 2023-01-20

### Added

- Support rerunning deployments that errored or went to on-hold on a previous run ([#70](https://github.com/NomicFoundation/ignition/pull/70))
- Support sending `ETH` to a contract without having to make a call/deploy ([#79](https://github.com/NomicFoundation/ignition/pull/79))
- Confirm dialog on deploys to non-hardhat networks ([#95](https://github.com/NomicFoundation/ignition/issues/95))

### Changed

- Rename the `awaitEvent` action in the api to `event` ([#108](https://github.com/NomicFoundation/ignition/issues/108))

## 0.0.5 - 2022-12-20

### Added

- Expose config for pollingInterval ([#75](https://github.com/NomicFoundation/ignition/pull/75))
- Support `getBytesForArtifact` in deployment api ([#76](https://github.com/NomicFoundation/ignition/pull/76))
- Support use of emitted event args as futures for later deployment api calls ([#77](https://github.com/NomicFoundation/ignition/pull/77))
- Support event params futures in `contractAt` ([#78](https://github.com/NomicFoundation/ignition/pull/78))

### Fixed

- Fix for planning on modules with deploys from artifacts ([#73](https://github.com/NomicFoundation/ignition/pull/73))

## 0.0.4 - 2022-11-22

### Added

- Pass eth as `value` on deploy or call ([#60](https://github.com/NomicFoundation/ignition/pull/60))
- Pass parameters for `value` ([#66](https://github.com/NomicFoundation/ignition/pull/66))

## 0.0.3 - 2022-11-09

### Added

- Allow modules to depend on other calls ([#53](https://github.com/NomicFoundation/ignition/pull/53))
- Allow depending on a module ([#54](https://github.com/NomicFoundation/ignition/pull/54))

### Changed

- Dependening on returned module contract equivalent to depending on the module ([#55](https://github.com/NomicFoundation/ignition/pull/55))

## 0.0.2 - 2022-10-26

### Added

- Deploy a module to a ephemeral local hardhat node
- Generate example execution graph for plans
