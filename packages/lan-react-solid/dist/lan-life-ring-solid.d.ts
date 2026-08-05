import React from 'react';

export interface LanLifeRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLifeRingSolid(props: LanLifeRingSolidProps): React.ReactElement;
export default LanLifeRingSolid;
