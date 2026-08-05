import React from 'react';

export interface LanBlogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlogThin(props: LanBlogThinProps): React.ReactElement;
export default LanBlogThin;
