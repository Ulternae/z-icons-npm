import React from 'react';

export interface MinaBookmarkDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkDot: React.FC<MinaBookmarkDotProps>;
export default MinaBookmarkDot;
