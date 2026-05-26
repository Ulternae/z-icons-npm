import React from 'react';

export interface LanSprayCanSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprayCanSparkles: React.FC<LanSprayCanSparklesProps>;
export default LanSprayCanSparkles;
