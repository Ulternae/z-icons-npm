import React from 'react';

export interface LanSignPostsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPosts: React.FC<LanSignPostsProps>;
export default LanSignPosts;
