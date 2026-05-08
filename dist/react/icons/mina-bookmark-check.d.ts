import React from 'react';

export interface MinaBookmarkCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkCheck: React.FC<MinaBookmarkCheckProps>;
export default MinaBookmarkCheck;
