import React from 'react';

export interface MinaBookmarkDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkDotSolid: React.FC<MinaBookmarkDotSolidProps>;
export default MinaBookmarkDotSolid;
