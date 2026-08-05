import React from 'react';

export interface LanCircleVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleVSolid(props: LanCircleVSolidProps): React.ReactElement;
export default LanCircleVSolid;
