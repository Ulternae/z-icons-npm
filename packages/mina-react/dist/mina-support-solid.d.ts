import React from 'react';

export interface MinaSupportSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSupportSolid(props: MinaSupportSolidProps): React.ReactElement;
export default MinaSupportSolid;
