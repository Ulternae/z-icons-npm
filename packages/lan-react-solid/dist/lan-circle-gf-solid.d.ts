import React from 'react';

export interface LanCircleGfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleGfSolid(props: LanCircleGfSolidProps): React.ReactElement;
export default LanCircleGfSolid;
