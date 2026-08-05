import React from 'react';

export interface MinaMaximizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMaximizeSolid(props: MinaMaximizeSolidProps): React.ReactElement;
export default MinaMaximizeSolid;
