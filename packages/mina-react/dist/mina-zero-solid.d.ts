import React from 'react';

export interface MinaZeroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroSolid(props: MinaZeroSolidProps): React.ReactElement;
export default MinaZeroSolid;
