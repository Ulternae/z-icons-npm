import React from 'react';

export interface MinaWindsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWinds: React.FC<MinaWindsProps>;
export default MinaWinds;
