import React from 'react';

export interface LanCircleYSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleYSolid(props: LanCircleYSolidProps): React.ReactElement;
export default LanCircleYSolid;
