import React from 'react';

export interface LanSpiderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpider: React.FC<LanSpiderProps>;
export default LanSpider;
