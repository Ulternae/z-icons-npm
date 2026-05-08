import React from 'react';

export interface MinaBookmarkXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkXSolid: React.FC<MinaBookmarkXSolidProps>;
export default MinaBookmarkXSolid;
