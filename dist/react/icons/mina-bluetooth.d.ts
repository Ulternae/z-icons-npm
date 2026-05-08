import React from 'react';

export interface MinaBluetoothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBluetooth: React.FC<MinaBluetoothProps>;
export default MinaBluetooth;
