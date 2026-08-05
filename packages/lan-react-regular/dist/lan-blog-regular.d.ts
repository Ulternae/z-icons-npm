import React from 'react';

export interface LanBlogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlogRegular(props: LanBlogRegularProps): React.ReactElement;
export default LanBlogRegular;
