import React from 'react';

export interface MinaEggSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEggSolid(props: MinaEggSolidProps): React.ReactElement;
export default MinaEggSolid;
