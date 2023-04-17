/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Messenger, MessengerInterface } from "../Messenger";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "messageIndex",
        type: "uint256",
      },
    ],
    name: "MessageConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositInWei",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPending",
        type: "bool",
      },
    ],
    name: "NewMessage",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_messageIndex",
        type: "uint256",
      },
    ],
    name: "accept",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwnMessages",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositInWei",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isPending",
            type: "bool",
          },
        ],
        internalType: "struct Messenger.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "post",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_messageIndex",
        type: "uint256",
      },
    ],
    name: "unAccept",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526200004f6040518060400160405280602081526020017f48657265206973206d7920666972737420736d61727420636f6e7472616374218152506200005560201b620007281760201c565b620001df565b620000f5816040516024016200006c9190620001bb565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200015d57808201518184015260208101905062000140565b60008484015250505050565b6000601f19601f8301169050919050565b6000620001878262000121565b6200019381856200012c565b9350620001a58185602086016200013d565b620001b08162000169565b840191505092915050565b60006020820190508181036000830152620001d781846200017a565b905092915050565b6116a780620001ef6000396000f3fe60806040526004361061004a5760003560e01c806313e262711461004f57806319b05f491461006b57806339932e0a14610094578063acdb8efd146100bd578063c19d93fb146100e8575b600080fd5b61006960048036038101906100649190610c63565b610113565b005b34801561007757600080fd5b50610092600480360381019061008d9190610cf5565b61031b565b005b3480156100a057600080fd5b506100bb60048036038101906100b69190610cf5565b61041a565b005b3480156100c957600080fd5b506100d2610519565b6040516100df9190610f25565b60405180910390f35b3480156100f457600080fd5b506100fd610722565b60405161010a9190610f56565b60405180910390f35b610137604051806060016040528060228152602001611650602291393384346107c1565b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200134815260200142815260200184815260200160011515815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015560808201518160040190816102b2919061117d565b5060a08201518160050160006101000a81548160ff02191690831515021790555050507f6b8f49facd5e00a27899ac1ac6cd3edeb40299f83f03eac03a0c04e7a90590963382344286600160405161030f9695949392919061131e565b60405180910390a15050565b61032481610863565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061037757610376611386565b5b906000526020600020906006020190506103b98160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682600201546109d1565b7f2657c0f1a183b8a175f4cf6c3f6d7764c7265155fc9635682baad3cedd67d2878160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360405161040e9291906113b5565b60405180910390a15050565b61042381610863565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061047657610475611386565b5b906000526020600020906006020190506104b88160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682600201546109d1565b7f2657c0f1a183b8a175f4cf6c3f6d7764c7265155fc9635682baad3cedd67d2878160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360405161050d9291906113b5565b60405180910390a15050565b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561071957838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201805461066d90610fa0565b80601f016020809104026020016040519081016040528092919081815260200182805461069990610fa0565b80156106e65780601f106106bb576101008083540402835291602001916106e6565b820191906000526020600020905b8154815290600101906020018083116106c957829003601f168201915b505050505081526020016005820160009054906101000a900460ff1615151515815250508152602001906001019061057a565b50505050905090565b60005481565b6107be8160405160240161073c91906113de565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610a82565b50565b61085d848484846040516024016107db9493929190611400565b6040516020818303038152906040527f91d1112e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610a82565b50505050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106108b6576108b5611386565b5b906000526020600020906006020190508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610958576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094f906114c5565b60405180910390fd5b600115158160050160009054906101000a900460ff161515146109b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a790611557565b60405180910390fd5b60008160050160006101000a81548160ff0219169083151502179055505050565b60008273ffffffffffffffffffffffffffffffffffffffff16826040516109f7906115a8565b60006040518083038185875af1925050503d8060008114610a34576040519150601f19603f3d011682016040523d82523d6000602084013e610a39565b606091505b5050905080610a7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a749061162f565b60405180910390fd5b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610b1282610ac9565b810181811067ffffffffffffffff82111715610b3157610b30610ada565b5b80604052505050565b6000610b44610aab565b9050610b508282610b09565b919050565b600067ffffffffffffffff821115610b7057610b6f610ada565b5b610b7982610ac9565b9050602081019050919050565b82818337600083830152505050565b6000610ba8610ba384610b55565b610b3a565b905082815260208101848484011115610bc457610bc3610ac4565b5b610bcf848285610b86565b509392505050565b600082601f830112610bec57610beb610abf565b5b8135610bfc848260208601610b95565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c3082610c05565b9050919050565b610c4081610c25565b8114610c4b57600080fd5b50565b600081359050610c5d81610c37565b92915050565b60008060408385031215610c7a57610c79610ab5565b5b600083013567ffffffffffffffff811115610c9857610c97610aba565b5b610ca485828601610bd7565b9250506020610cb585828601610c4e565b9150509250929050565b6000819050919050565b610cd281610cbf565b8114610cdd57600080fd5b50565b600081359050610cef81610cc9565b92915050565b600060208284031215610d0b57610d0a610ab5565b5b6000610d1984828501610ce0565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610d5781610c25565b82525050565b610d6681610cbf565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610da6578082015181840152602081019050610d8b565b60008484015250505050565b6000610dbd82610d6c565b610dc78185610d77565b9350610dd7818560208601610d88565b610de081610ac9565b840191505092915050565b60008115159050919050565b610e0081610deb565b82525050565b600060c083016000830151610e1e6000860182610d4e565b506020830151610e316020860182610d4e565b506040830151610e446040860182610d5d565b506060830151610e576060860182610d5d565b5060808301518482036080860152610e6f8282610db2565b91505060a0830151610e8460a0860182610df7565b508091505092915050565b6000610e9b8383610e06565b905092915050565b6000602082019050919050565b6000610ebb82610d22565b610ec58185610d2d565b935083602082028501610ed785610d3e565b8060005b85811015610f135784840389528151610ef48582610e8f565b9450610eff83610ea3565b925060208a01995050600181019050610edb565b50829750879550505050505092915050565b60006020820190508181036000830152610f3f8184610eb0565b905092915050565b610f5081610cbf565b82525050565b6000602082019050610f6b6000830184610f47565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610fb857607f821691505b602082108103610fcb57610fca610f71565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026110337fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610ff6565b61103d8683610ff6565b95508019841693508086168417925050509392505050565b6000819050919050565b600061107a61107561107084610cbf565b611055565b610cbf565b9050919050565b6000819050919050565b6110948361105f565b6110a86110a082611081565b848454611003565b825550505050565b600090565b6110bd6110b0565b6110c881848461108b565b505050565b5b818110156110ec576110e16000826110b5565b6001810190506110ce565b5050565b601f8211156111315761110281610fd1565b61110b84610fe6565b8101602085101561111a578190505b61112e61112685610fe6565b8301826110cd565b50505b505050565b600082821c905092915050565b600061115460001984600802611136565b1980831691505092915050565b600061116d8383611143565b9150826002028217905092915050565b61118682610d6c565b67ffffffffffffffff81111561119f5761119e610ada565b5b6111a98254610fa0565b6111b48282856110f0565b600060209050601f8311600181146111e757600084156111d5578287015190505b6111df8582611161565b865550611247565b601f1984166111f586610fd1565b60005b8281101561121d578489015182556001820191506020850194506020810190506111f8565b8683101561123a5784890151611236601f891682611143565b8355505b6001600288020188555050505b505050505050565b600061125a82610c05565b9050919050565b61126a8161124f565b82525050565b600061128b61128661128184610c05565b611055565b610c05565b9050919050565b600061129d82611270565b9050919050565b60006112af82611292565b9050919050565b6112bf816112a4565b82525050565b600082825260208201905092915050565b60006112e182610d6c565b6112eb81856112c5565b93506112fb818560208601610d88565b61130481610ac9565b840191505092915050565b61131881610deb565b82525050565b600060c0820190506113336000830189611261565b61134060208301886112b6565b61134d6040830187610f47565b61135a6060830186610f47565b818103608083015261136c81856112d6565b905061137b60a083018461130f565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006040820190506113ca60008301856112b6565b6113d76020830184610f47565b9392505050565b600060208201905081810360008301526113f881846112d6565b905092915050565b6000608082019050818103600083015261141a81876112d6565b90506114296020830186611261565b818103604083015261143b81856112d6565b905061144a6060830184610f47565b95945050505050565b7f4f6e6c79207468652072656365697665722063616e20636f6e6669726d4d657360008201527f7361676520746865206d65737361676500000000000000000000000000000000602082015250565b60006114af6030836112c5565b91506114ba82611453565b604082019050919050565b600060208201905081810360008301526114de816114a2565b9050919050565b7f54686973206d6573736167652068617320616c7265616479206265656e20636f60008201527f6e6669726d656400000000000000000000000000000000000000000000000000602082015250565b60006115416027836112c5565b915061154c826114e5565b604082019050919050565b6000602082019050818103600083015261157081611534565b9050919050565b600081905092915050565b50565b6000611592600083611577565b915061159d82611582565b600082019050919050565b60006115b382611585565b9150819050919050565b7f4661696c656420746f20776974686472617720415641582066726f6d20636f6e60008201527f7472616374000000000000000000000000000000000000000000000000000000602082015250565b60006116196025836112c5565b9150611624826115bd565b604082019050919050565b600060208201905081810360008301526116488161160c565b905091905056fe2573202d3e20706f7374732c20746578743a5b25735d2c20746f6b656e3a5b25645da26469706673582212209cf9f01ca5328694c1f3fd95dc5f20c83f39377c92617c53bd2d30e1569d955764736f6c63430008120033";

type MessengerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MessengerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Messenger__factory extends ContractFactory {
  constructor(...args: MessengerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<Messenger> {
    return super.deploy(overrides || {}) as Promise<Messenger>;
  }
  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Messenger {
    return super.attach(address) as Messenger;
  }
  override connect(signer: Signer): Messenger__factory {
    return super.connect(signer) as Messenger__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessengerInterface {
    return new utils.Interface(_abi) as MessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Messenger {
    return new Contract(address, _abi, signerOrProvider) as Messenger;
  }
}