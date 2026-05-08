import React from 'react';

export interface MinaBookmarkPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkPlusSolid: React.FC<MinaBookmarkPlusSolidProps>;
export default MinaBookmarkPlusSolid;
