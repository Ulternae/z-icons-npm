import React from 'react';

export interface LanSparklesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSparklesRegular: React.FC<LanSparklesRegularProps>;
export default LanSparklesRegular;
