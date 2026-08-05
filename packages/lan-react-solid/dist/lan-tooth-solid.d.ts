import React from 'react';

export interface LanToothSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToothSolid(props: LanToothSolidProps): React.ReactElement;
export default LanToothSolid;
