import React from 'react';

export interface LanBlogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlog(props: LanBlogProps): React.ReactElement;
export default LanBlog;
