import React from 'react';

export interface NeoCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircle: React.FC<NeoCircleProps>;
export default NeoCircle;
