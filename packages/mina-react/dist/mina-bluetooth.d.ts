import React from 'react';

export interface MinaBluetoothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBluetooth(props: MinaBluetoothProps): React.ReactElement;
export default MinaBluetooth;
