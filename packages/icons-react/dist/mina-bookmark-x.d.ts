import React from 'react';

export interface MinaBookmarkXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkX: React.FC<MinaBookmarkXProps>;
export default MinaBookmarkX;
