import React from 'react';

export interface LanCookieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCookieSolid(props: LanCookieSolidProps): React.ReactElement;
export default LanCookieSolid;
