import React from 'react';

export interface LanSignPostsWrenchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPostsWrenchThin: React.FC<LanSignPostsWrenchThinProps>;
export default LanSignPostsWrenchThin;
