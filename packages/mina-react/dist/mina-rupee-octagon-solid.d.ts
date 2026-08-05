import React from 'react';

export interface MinaRupeeOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeOctagonSolid(props: MinaRupeeOctagonSolidProps): React.ReactElement;
export default MinaRupeeOctagonSolid;
