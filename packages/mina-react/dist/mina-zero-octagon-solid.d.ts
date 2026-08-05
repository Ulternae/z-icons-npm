import React from 'react';

export interface MinaZeroOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroOctagonSolid(props: MinaZeroOctagonSolidProps): React.ReactElement;
export default MinaZeroOctagonSolid;
