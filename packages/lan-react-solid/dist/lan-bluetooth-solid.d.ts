import React from 'react';

export interface LanBluetoothSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBluetoothSolid(props: LanBluetoothSolidProps): React.ReactElement;
export default LanBluetoothSolid;
