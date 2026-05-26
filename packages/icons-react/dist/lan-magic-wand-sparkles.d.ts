import React from 'react';

export interface LanMagicWandSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagicWandSparkles: React.FC<LanMagicWandSparklesProps>;
export default LanMagicWandSparkles;
