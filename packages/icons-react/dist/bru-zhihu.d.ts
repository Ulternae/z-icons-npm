import React from 'react';

export interface BruZhihuProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruZhihu: React.FC<BruZhihuProps>;
export default BruZhihu;
