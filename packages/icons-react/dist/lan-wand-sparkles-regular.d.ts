import React from 'react';

export interface LanWandSparklesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandSparklesRegular: React.FC<LanWandSparklesRegularProps>;
export default LanWandSparklesRegular;
