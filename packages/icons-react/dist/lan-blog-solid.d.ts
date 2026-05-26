import React from 'react';

export interface LanBlogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlogSolid: React.FC<LanBlogSolidProps>;
export default LanBlogSolid;
