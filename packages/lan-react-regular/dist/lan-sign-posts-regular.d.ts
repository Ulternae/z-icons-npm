import React from 'react';

export interface LanSignPostsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignPostsRegular(props: LanSignPostsRegularProps): React.ReactElement;
export default LanSignPostsRegular;
