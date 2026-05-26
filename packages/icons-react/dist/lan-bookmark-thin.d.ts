import React from 'react';

export interface LanBookmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkThin: React.FC<LanBookmarkThinProps>;
export default LanBookmarkThin;
