import React from 'react';

export interface LanBluetoothRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBluetoothRegular: React.FC<LanBluetoothRegularProps>;
export default LanBluetoothRegular;
