import React from 'react';

export interface MinaBookmarkHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkHome: React.FC<MinaBookmarkHomeProps>;
export default MinaBookmarkHome;
