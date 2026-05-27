import React from 'react';

export interface CoreWandMagicSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWandMagicSparkles: React.FC<CoreWandMagicSparklesProps>;
export default CoreWandMagicSparkles;
