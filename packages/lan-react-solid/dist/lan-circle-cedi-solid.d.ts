import React from 'react';

export interface LanCircleCediSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCediSolid(props: LanCircleCediSolidProps): React.ReactElement;
export default LanCircleCediSolid;
