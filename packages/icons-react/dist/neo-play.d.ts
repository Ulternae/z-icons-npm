import React from 'react';

export interface NeoPlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlay: React.FC<NeoPlayProps>;
export default NeoPlay;
