import React from 'react';

export interface MinaMinimizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinimizeSolid(props: MinaMinimizeSolidProps): React.ReactElement;
export default MinaMinimizeSolid;
