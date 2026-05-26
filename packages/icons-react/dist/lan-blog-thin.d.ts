import React from 'react';

export interface LanBlogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlogThin: React.FC<LanBlogThinProps>;
export default LanBlogThin;
