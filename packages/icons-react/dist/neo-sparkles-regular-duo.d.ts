import React from 'react';

export interface NeoSparklesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSparklesRegularDuo: React.FC<NeoSparklesRegularDuoProps>;
export default NeoSparklesRegularDuo;
