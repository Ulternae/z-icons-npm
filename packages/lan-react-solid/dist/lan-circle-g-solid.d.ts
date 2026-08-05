import React from 'react';

export interface LanCircleGSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleGSolid(props: LanCircleGSolidProps): React.ReactElement;
export default LanCircleGSolid;
