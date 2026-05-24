import React from 'react';

export interface BruBluetoothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBluetooth: React.FC<BruBluetoothProps>;
export default BruBluetooth;
