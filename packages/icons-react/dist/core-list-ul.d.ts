import React from 'react';

export interface CoreListUlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreListUl: React.FC<CoreListUlProps>;
export default CoreListUl;
