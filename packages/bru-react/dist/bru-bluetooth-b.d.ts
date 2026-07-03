import React from 'react';

export interface BruBluetoothBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBluetoothB(props: BruBluetoothBProps): React.ReactElement;
export default BruBluetoothB;
