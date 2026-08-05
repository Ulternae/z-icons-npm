import React from 'react';

export interface MinaDollarOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarOctagonSolid(props: MinaDollarOctagonSolidProps): React.ReactElement;
export default MinaDollarOctagonSolid;
