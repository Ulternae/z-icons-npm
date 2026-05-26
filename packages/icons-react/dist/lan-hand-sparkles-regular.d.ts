import React from 'react';

export interface LanHandSparklesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandSparklesRegular: React.FC<LanHandSparklesRegularProps>;
export default LanHandSparklesRegular;
