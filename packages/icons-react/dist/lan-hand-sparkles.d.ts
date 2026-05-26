import React from 'react';

export interface LanHandSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandSparkles: React.FC<LanHandSparklesProps>;
export default LanHandSparkles;
