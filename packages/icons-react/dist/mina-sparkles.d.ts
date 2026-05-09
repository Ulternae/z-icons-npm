import React from 'react';

export interface MinaSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSparkles: React.FC<MinaSparklesProps>;
export default MinaSparkles;
