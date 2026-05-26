import React from 'react';

export interface LanBlogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlog: React.FC<LanBlogProps>;
export default LanBlog;
