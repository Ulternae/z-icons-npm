import React from 'react';

export interface LanBluetoothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBluetooth(props: LanBluetoothProps): React.ReactElement;
export default LanBluetooth;
