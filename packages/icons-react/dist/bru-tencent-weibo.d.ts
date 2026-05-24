import React from 'react';

export interface BruTencentWeiboProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTencentWeibo: React.FC<BruTencentWeiboProps>;
export default BruTencentWeibo;
