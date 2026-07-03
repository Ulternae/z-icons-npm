import React from 'react';

export interface BruBluetoothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBluetooth(props: BruBluetoothProps): React.ReactElement;
export default BruBluetooth;
