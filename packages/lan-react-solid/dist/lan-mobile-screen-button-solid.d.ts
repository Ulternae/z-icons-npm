import React from 'react';

export interface LanMobileScreenButtonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileScreenButtonSolid(props: LanMobileScreenButtonSolidProps): React.ReactElement;
export default LanMobileScreenButtonSolid;
