import React from 'react';

export interface LanBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmark: React.FC<LanBookmarkProps>;
export default LanBookmark;
