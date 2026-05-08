import React from 'react';

export interface MinaBookmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkSolid: React.FC<MinaBookmarkSolidProps>;
export default MinaBookmarkSolid;
