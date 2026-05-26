import React from 'react';

export interface LanBookmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkSolid: React.FC<LanBookmarkSolidProps>;
export default LanBookmarkSolid;
