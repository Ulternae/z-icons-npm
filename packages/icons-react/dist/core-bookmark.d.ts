import React from 'react';

export interface CoreBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBookmark: React.FC<CoreBookmarkProps>;
export default CoreBookmark;
