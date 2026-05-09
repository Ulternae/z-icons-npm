import React from 'react';

export interface MinaChatDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatDots: React.FC<MinaChatDotsProps>;
export default MinaChatDots;
