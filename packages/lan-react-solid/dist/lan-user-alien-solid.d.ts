import React from 'react';

export interface LanUserAlienSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserAlienSolid(props: LanUserAlienSolidProps): React.ReactElement;
export default LanUserAlienSolid;
