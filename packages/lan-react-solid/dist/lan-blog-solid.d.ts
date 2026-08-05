import React from 'react';

export interface LanBlogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlogSolid(props: LanBlogSolidProps): React.ReactElement;
export default LanBlogSolid;
