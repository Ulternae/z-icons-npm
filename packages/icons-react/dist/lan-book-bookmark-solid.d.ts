import React from 'react';

export interface LanBookBookmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookBookmarkSolid: React.FC<LanBookBookmarkSolidProps>;
export default LanBookBookmarkSolid;
