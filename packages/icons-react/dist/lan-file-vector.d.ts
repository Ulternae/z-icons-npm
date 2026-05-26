import React from 'react';

export interface LanFileVectorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileVector: React.FC<LanFileVectorProps>;
export default LanFileVector;
