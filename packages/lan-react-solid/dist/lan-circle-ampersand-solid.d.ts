import React from 'react';

export interface LanCircleAmpersandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleAmpersandSolid(props: LanCircleAmpersandSolidProps): React.ReactElement;
export default LanCircleAmpersandSolid;
