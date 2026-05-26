import React from 'react';

export interface LanSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSparkles: React.FC<LanSparklesProps>;
export default LanSparkles;
