import React from 'react';

export interface NeoSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSparkles: React.FC<NeoSparklesProps>;
export default NeoSparkles;
