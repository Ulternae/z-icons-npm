import React from 'react';

export interface NeoHeartHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHeartHalf: React.FC<NeoHeartHalfProps>;
export default NeoHeartHalf;
