import React from 'react';

export interface LanBlogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlogRegular: React.FC<LanBlogRegularProps>;
export default LanBlogRegular;
