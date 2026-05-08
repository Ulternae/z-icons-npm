import React from 'react';

export interface MinaSproutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSprout: React.FC<MinaSproutProps>;
export default MinaSprout;
