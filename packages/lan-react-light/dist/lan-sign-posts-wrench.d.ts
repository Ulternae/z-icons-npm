import React from 'react';

export interface LanSignPostsWrenchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignPostsWrench(props: LanSignPostsWrenchProps): React.ReactElement;
export default LanSignPostsWrench;
