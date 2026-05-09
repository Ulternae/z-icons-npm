import React from 'react';

export interface MinaBookmarkPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkPlus: React.FC<MinaBookmarkPlusProps>;
export default MinaBookmarkPlus;
