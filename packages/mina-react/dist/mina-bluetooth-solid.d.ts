import React from 'react';

export interface MinaBluetoothSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBluetoothSolid(props: MinaBluetoothSolidProps): React.ReactElement;
export default MinaBluetoothSolid;
