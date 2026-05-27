import React from 'react';

export interface CoreSparklesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSparklesRegularDuo: React.FC<CoreSparklesRegularDuoProps>;
export default CoreSparklesRegularDuo;
