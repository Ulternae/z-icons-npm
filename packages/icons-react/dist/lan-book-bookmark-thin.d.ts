import React from 'react';

export interface LanBookBookmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookBookmarkThin: React.FC<LanBookBookmarkThinProps>;
export default LanBookBookmarkThin;
