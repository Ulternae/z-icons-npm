import React from 'react';

export interface LanBookmarkPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkPlusThin: React.FC<LanBookmarkPlusThinProps>;
export default LanBookmarkPlusThin;
