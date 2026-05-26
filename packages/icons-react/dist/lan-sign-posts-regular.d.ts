import React from 'react';

export interface LanSignPostsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPostsRegular: React.FC<LanSignPostsRegularProps>;
export default LanSignPostsRegular;
