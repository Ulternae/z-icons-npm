import React from 'react';

export interface MinaChatCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatCheck: React.FC<MinaChatCheckProps>;
export default MinaChatCheck;
