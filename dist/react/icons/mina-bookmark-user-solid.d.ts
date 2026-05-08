import React from 'react';

export interface MinaBookmarkUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkUserSolid: React.FC<MinaBookmarkUserSolidProps>;
export default MinaBookmarkUserSolid;
