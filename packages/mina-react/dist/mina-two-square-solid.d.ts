import React from 'react';

export interface MinaTwoSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoSquareSolid(props: MinaTwoSquareSolidProps): React.ReactElement;
export default MinaTwoSquareSolid;
