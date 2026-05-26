import React from 'react';

export interface LanWandSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandSparkles: React.FC<LanWandSparklesProps>;
export default LanWandSparkles;
