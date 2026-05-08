import React from 'react';

export interface MinaChatMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatMinus: React.FC<MinaChatMinusProps>;
export default MinaChatMinus;
