import React from 'react';

export interface MinaDollarCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarCircleSolid(props: MinaDollarCircleSolidProps): React.ReactElement;
export default MinaDollarCircleSolid;
