import React from 'react';

export interface BruWeixinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWeixin: React.FC<BruWeixinProps>;
export default BruWeixin;
