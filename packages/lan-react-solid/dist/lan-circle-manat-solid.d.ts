import React from 'react';

export interface LanCircleManatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleManatSolid(props: LanCircleManatSolidProps): React.ReactElement;
export default LanCircleManatSolid;
