import React from 'react';

export interface LanBookBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookBookmark: React.FC<LanBookBookmarkProps>;
export default LanBookBookmark;
