/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ValidatorManagerInterface extends ethers.utils.Interface {
  functions: {
    "disableModule(address,address)": FunctionFragment;
    "enableValidator(address,bytes)": FunctionFragment;
    "getValidatorsPaginated(address,uint256)": FunctionFragment;
    "isValidatorEnabled(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "disableModule",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "enableValidator",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getValidatorsPaginated",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidatorEnabled",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "disableModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getValidatorsPaginated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidatorEnabled",
    data: BytesLike
  ): Result;

  events: {
    "DisabledValidator(address)": EventFragment;
    "EnabledValidator(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DisabledValidator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EnabledValidator"): EventFragment;
}

export class ValidatorManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ValidatorManagerInterface;

  functions: {
    disableModule(
      prevValidator: string,
      validator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "disableModule(address,address)"(
      prevValidator: string,
      validator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    enableValidator(
      validator: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "enableValidator(address,bytes)"(
      validator: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getValidatorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      array: string[];
      next: string;
      0: string[];
      1: string;
    }>;

    "getValidatorsPaginated(address,uint256)"(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      array: string[];
      next: string;
      0: string[];
      1: string;
    }>;

    isValidatorEnabled(
      validator: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isValidatorEnabled(address)"(
      validator: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  disableModule(
    prevValidator: string,
    validator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "disableModule(address,address)"(
    prevValidator: string,
    validator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  enableValidator(
    validator: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "enableValidator(address,bytes)"(
    validator: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getValidatorsPaginated(
    start: string,
    pageSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    array: string[];
    next: string;
    0: string[];
    1: string;
  }>;

  "getValidatorsPaginated(address,uint256)"(
    start: string,
    pageSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    array: string[];
    next: string;
    0: string[];
    1: string;
  }>;

  isValidatorEnabled(
    validator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isValidatorEnabled(address)"(
    validator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    disableModule(
      prevValidator: string,
      validator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "disableModule(address,address)"(
      prevValidator: string,
      validator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    enableValidator(
      validator: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "enableValidator(address,bytes)"(
      validator: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getValidatorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      array: string[];
      next: string;
      0: string[];
      1: string;
    }>;

    "getValidatorsPaginated(address,uint256)"(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      array: string[];
      next: string;
      0: string[];
      1: string;
    }>;

    isValidatorEnabled(
      validator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidatorEnabled(address)"(
      validator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    DisabledValidator(validator: null): EventFilter;

    EnabledValidator(validator: null): EventFilter;
  };

  estimateGas: {
    disableModule(
      prevValidator: string,
      validator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "disableModule(address,address)"(
      prevValidator: string,
      validator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    enableValidator(
      validator: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "enableValidator(address,bytes)"(
      validator: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getValidatorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getValidatorsPaginated(address,uint256)"(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidatorEnabled(
      validator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidatorEnabled(address)"(
      validator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    disableModule(
      prevValidator: string,
      validator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "disableModule(address,address)"(
      prevValidator: string,
      validator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    enableValidator(
      validator: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "enableValidator(address,bytes)"(
      validator: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getValidatorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getValidatorsPaginated(address,uint256)"(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidatorEnabled(
      validator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidatorEnabled(address)"(
      validator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
