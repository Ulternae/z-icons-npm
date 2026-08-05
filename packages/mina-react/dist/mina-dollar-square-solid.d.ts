import React from 'react';

export interface MinaDollarSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarSquareSolid(props: MinaDollarSquareSolidProps): React.ReactElement;
export default MinaDollarSquareSolid;
