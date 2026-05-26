import React from 'react';

export interface LanBluetoothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBluetooth: React.FC<LanBluetoothProps>;
export default LanBluetooth;
