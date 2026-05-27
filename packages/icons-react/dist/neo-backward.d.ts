import React from 'react';

export interface NeoBackwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBackward: React.FC<NeoBackwardProps>;
export default NeoBackward;
