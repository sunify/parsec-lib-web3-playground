/**
 * Copyright (c) 2018-present, Parsec Labs (parseclabs.org)
 *
 * This source code is licensed under the GNU GENERAL PUBLIC LICENSE Version 3
 * found in the LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/jsx-no-bind, class-methods-use-this */

import React from 'react';
import Web3 from 'web3';
import { Tx, Input, Output, Outpoint } from 'parsec-lib';

import '../style.css';

const web3 = new Web3(window.web3.currentProvider);
console.log(web3);

class App extends React.Component {
  handleSign() {
    const tx = Tx.transfer(
      [
        new Input(
          new Outpoint(
            '0x0000000000000000000000000000000000000000000000000000000000000000',
            0
          )
        ),
        new Input(
          new Outpoint(
            '0x0000000000000000000000000000000000000000000000000000000000000000',
            1
          )
        ),
      ],
      [new Output(100, '0x8ab21c65041778dfc7ec7995f9cdef3d5221a5ad', 0)]
    );

    tx.signWeb3(web3).then(signedTx => {
      console.log(signedTx);
    });
    // const address = '0x8ab21c65041778dfc7ec7995f9cdef3d5221a5ad';
    // web3.eth.sign(tx.sigHash(), address).then(sig => {
    //   const { r, s, v } = ethUtil.fromRpcSig(sig);
    //   tx.inputs.forEach(input => {
    //     input.setSig(r, s, v, address);
    //   });
    //   console.log();
    // });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSign.bind(this)}>Sign</button>
      </div>
    );
  }
}

export default App;
