import React from 'react';

export interface LanBluetoothThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBluetoothThin(props: LanBluetoothThinProps): React.ReactElement;
export default LanBluetoothThin;
