import React from 'react';

export interface LanCircleXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleXSolid(props: LanCircleXSolidProps): React.ReactElement;
export default LanCircleXSolid;
