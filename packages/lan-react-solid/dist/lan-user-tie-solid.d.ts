import React from 'react';

export interface LanUserTieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTieSolid(props: LanUserTieSolidProps): React.ReactElement;
export default LanUserTieSolid;
