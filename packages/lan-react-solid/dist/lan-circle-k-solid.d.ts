import React from 'react';

export interface LanCircleKSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleKSolid(props: LanCircleKSolidProps): React.ReactElement;
export default LanCircleKSolid;
