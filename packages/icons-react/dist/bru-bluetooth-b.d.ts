import React from 'react';

export interface BruBluetoothBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBluetoothB: React.FC<BruBluetoothBProps>;
export default BruBluetoothB;
