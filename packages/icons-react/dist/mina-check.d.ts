import React from 'react';

export interface MinaCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheck: React.FC<MinaCheckProps>;
export default MinaCheck;
