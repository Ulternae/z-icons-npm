import React from 'react';

export interface LanFileCircleInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleInfoSolid(props: LanFileCircleInfoSolidProps): React.ReactElement;
export default LanFileCircleInfoSolid;
