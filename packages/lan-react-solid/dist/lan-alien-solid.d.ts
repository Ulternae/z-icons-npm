import React from 'react';

export interface LanAlienSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlienSolid(props: LanAlienSolidProps): React.ReactElement;
export default LanAlienSolid;
