import React from 'react';

export interface MinaEightOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightOctagonSolid(props: MinaEightOctagonSolidProps): React.ReactElement;
export default MinaEightOctagonSolid;
