import React from 'react';

export interface MinaPaintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPaintSolid(props: MinaPaintSolidProps): React.ReactElement;
export default MinaPaintSolid;
