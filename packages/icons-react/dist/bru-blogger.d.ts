import React from 'react';

export interface BruBloggerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBlogger: React.FC<BruBloggerProps>;
export default BruBlogger;
