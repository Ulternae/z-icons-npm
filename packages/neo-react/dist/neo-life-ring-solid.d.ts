import React from 'react';

export interface NeoLifeRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLifeRingSolid(props: NeoLifeRingSolidProps): React.ReactElement;
export default NeoLifeRingSolid;
