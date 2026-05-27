import React from 'react';

export interface CoreSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSparkles: React.FC<CoreSparklesProps>;
export default CoreSparkles;
