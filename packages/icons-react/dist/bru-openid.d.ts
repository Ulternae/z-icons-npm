import React from 'react';

export interface BruOpenidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOpenid: React.FC<BruOpenidProps>;
export default BruOpenid;
