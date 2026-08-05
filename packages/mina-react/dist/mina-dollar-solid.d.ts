import React from 'react';

export interface MinaDollarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarSolid(props: MinaDollarSolidProps): React.ReactElement;
export default MinaDollarSolid;
