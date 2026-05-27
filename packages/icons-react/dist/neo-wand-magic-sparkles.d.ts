import React from 'react';

export interface NeoWandMagicSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWandMagicSparkles: React.FC<NeoWandMagicSparklesProps>;
export default NeoWandMagicSparkles;
