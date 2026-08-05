import React from 'react';

export interface LanUsdCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsdCircleSolid(props: LanUsdCircleSolidProps): React.ReactElement;
export default LanUsdCircleSolid;
