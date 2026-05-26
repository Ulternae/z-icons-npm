import React from 'react';

export interface LanBookmarkPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkPlus: React.FC<LanBookmarkPlusProps>;
export default LanBookmarkPlus;
