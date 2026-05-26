import React from 'react';

export interface LanSignPostsWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPostsWrenchSolid: React.FC<LanSignPostsWrenchSolidProps>;
export default LanSignPostsWrenchSolid;
