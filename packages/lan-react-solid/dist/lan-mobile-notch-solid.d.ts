import React from 'react';

export interface LanMobileNotchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileNotchSolid(props: LanMobileNotchSolidProps): React.ReactElement;
export default LanMobileNotchSolid;
