import React from 'react';

export interface BruBloggerBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBloggerB: React.FC<BruBloggerBProps>;
export default BruBloggerB;
