import React from 'react';

export interface LanBluetoothThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBluetoothThin: React.FC<LanBluetoothThinProps>;
export default LanBluetoothThin;
