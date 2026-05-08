import React from 'react';

export interface MinaBookmarkHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkHomeSolid: React.FC<MinaBookmarkHomeSolidProps>;
export default MinaBookmarkHomeSolid;
