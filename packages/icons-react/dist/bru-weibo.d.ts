import React from 'react';

export interface BruWeiboProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWeibo: React.FC<BruWeiboProps>;
export default BruWeibo;
