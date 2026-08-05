import React from 'react';

export interface LanBluetoothRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBluetoothRegular(props: LanBluetoothRegularProps): React.ReactElement;
export default LanBluetoothRegular;
