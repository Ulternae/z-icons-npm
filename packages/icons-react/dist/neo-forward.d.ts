import React from 'react';

export interface NeoForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoForward: React.FC<NeoForwardProps>;
export default NeoForward;
