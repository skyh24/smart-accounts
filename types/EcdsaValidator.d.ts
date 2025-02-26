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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface EcdsaValidatorInterface extends ethers.utils.Interface {
  functions: {
    "NAME()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "enable(bytes)": FunctionFragment;
    "owner(address)": FunctionFragment;
    "validateSignature(address,bytes32,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(functionFragment: "enable", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "owner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "validateSignature",
    values: [string, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateSignature",
    data: BytesLike
  ): Result;

  events: {
    "OwnerChanged(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
}

export class EcdsaValidator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EcdsaValidatorInterface;

  functions: {
    NAME(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "NAME()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    VERSION(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "VERSION()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    enable(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "enable(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "validateSignature(address,bytes32,bytes)"(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  NAME(overrides?: CallOverrides): Promise<string>;

  "NAME()"(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  "VERSION()"(overrides?: CallOverrides): Promise<string>;

  enable(data: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

  "enable(bytes)"(
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(arg0: string, overrides?: CallOverrides): Promise<string>;

  "owner(address)"(arg0: string, overrides?: CallOverrides): Promise<string>;

  validateSignature(
    account: string,
    userOpHash: BytesLike,
    signature: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "validateSignature(address,bytes32,bytes)"(
    account: string,
    userOpHash: BytesLike,
    signature: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    NAME(overrides?: CallOverrides): Promise<string>;

    "NAME()"(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    "VERSION()"(overrides?: CallOverrides): Promise<string>;

    enable(data: BytesLike, overrides?: CallOverrides): Promise<void>;

    "enable(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<void>;

    owner(arg0: string, overrides?: CallOverrides): Promise<string>;

    "owner(address)"(arg0: string, overrides?: CallOverrides): Promise<string>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validateSignature(address,bytes32,bytes)"(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    OwnerChanged(
      account: string | null,
      oldOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    NAME(overrides?: CallOverrides): Promise<BigNumber>;

    "NAME()"(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    "VERSION()"(overrides?: CallOverrides): Promise<BigNumber>;

    enable(data: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "enable(bytes)"(data: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    owner(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "owner(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "validateSignature(address,bytes32,bytes)"(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "NAME()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "VERSION()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enable(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "enable(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "owner(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateSignature(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "validateSignature(address,bytes32,bytes)"(
      account: string,
      userOpHash: BytesLike,
      signature: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
