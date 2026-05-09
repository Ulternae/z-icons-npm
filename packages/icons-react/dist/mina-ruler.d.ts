import React from 'react';

export interface MinaRulerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRuler: React.FC<MinaRulerProps>;
export default MinaRuler;
