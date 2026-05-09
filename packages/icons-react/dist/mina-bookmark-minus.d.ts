import React from 'react';

export interface MinaBookmarkMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkMinus: React.FC<MinaBookmarkMinusProps>;
export default MinaBookmarkMinus;
