import React from 'react';

export interface LanSunDustSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunDustSolid(props: LanSunDustSolidProps): React.ReactElement;
export default LanSunDustSolid;
