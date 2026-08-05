import React from 'react';

export interface LanCircleOSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleOSolid(props: LanCircleOSolidProps): React.ReactElement;
export default LanCircleOSolid;
