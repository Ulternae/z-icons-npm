import React from 'react';

export interface MinaContactlessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaContactless: React.FC<MinaContactlessProps>;
export default MinaContactless;
