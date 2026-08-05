import React from 'react';

export interface LanMobileButtonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileButtonSolid(props: LanMobileButtonSolidProps): React.ReactElement;
export default LanMobileButtonSolid;
