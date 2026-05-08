import React from 'react';

export interface MinaSearchOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchOctagonSolid: React.FC<MinaSearchOctagonSolidProps>;
export default MinaSearchOctagonSolid;
