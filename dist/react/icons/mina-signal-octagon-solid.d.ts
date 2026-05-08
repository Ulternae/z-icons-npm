import React from 'react';

export interface MinaSignalOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalOctagonSolid: React.FC<MinaSignalOctagonSolidProps>;
export default MinaSignalOctagonSolid;
