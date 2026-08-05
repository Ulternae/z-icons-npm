import React from 'react';

export interface MinaSevenOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenOctagonSolid(props: MinaSevenOctagonSolidProps): React.ReactElement;
export default MinaSevenOctagonSolid;
