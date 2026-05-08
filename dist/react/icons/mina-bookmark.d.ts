import React from 'react';

export interface MinaBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmark: React.FC<MinaBookmarkProps>;
export default MinaBookmark;
