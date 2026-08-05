import React from 'react';

export interface LanCookieBiteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCookieBiteSolid(props: LanCookieBiteSolidProps): React.ReactElement;
export default LanCookieBiteSolid;
