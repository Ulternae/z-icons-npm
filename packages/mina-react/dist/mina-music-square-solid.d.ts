import React from 'react';

export interface MinaMusicSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicSquareSolid(props: MinaMusicSquareSolidProps): React.ReactElement;
export default MinaMusicSquareSolid;
