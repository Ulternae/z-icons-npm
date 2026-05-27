import React from 'react';

export interface NeoCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleCheck: React.FC<NeoCircleCheckProps>;
export default NeoCircleCheck;
