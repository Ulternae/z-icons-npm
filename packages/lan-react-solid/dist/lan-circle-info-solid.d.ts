import React from 'react';

export interface LanCircleInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleInfoSolid(props: LanCircleInfoSolidProps): React.ReactElement;
export default LanCircleInfoSolid;
