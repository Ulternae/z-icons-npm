import React from 'react';

export interface MinaAmpersandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAmpersand: React.FC<MinaAmpersandProps>;
export default MinaAmpersand;
