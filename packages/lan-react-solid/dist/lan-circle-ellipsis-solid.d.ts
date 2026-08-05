import React from 'react';

export interface LanCircleEllipsisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEllipsisSolid(props: LanCircleEllipsisSolidProps): React.ReactElement;
export default LanCircleEllipsisSolid;
