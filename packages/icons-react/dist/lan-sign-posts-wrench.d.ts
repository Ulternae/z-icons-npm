import React from 'react';

export interface LanSignPostsWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPostsWrench: React.FC<LanSignPostsWrenchProps>;
export default LanSignPostsWrench;
