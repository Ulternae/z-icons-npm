import React from 'react';

export interface LanSignPostsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignPosts(props: LanSignPostsProps): React.ReactElement;
export default LanSignPosts;
