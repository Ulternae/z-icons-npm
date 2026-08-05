import React from 'react';

export interface MinaEuroOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroOctagonSolid(props: MinaEuroOctagonSolidProps): React.ReactElement;
export default MinaEuroOctagonSolid;
