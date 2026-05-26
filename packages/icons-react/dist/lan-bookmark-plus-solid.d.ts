import React from 'react';

export interface LanBookmarkPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkPlusSolid: React.FC<LanBookmarkPlusSolidProps>;
export default LanBookmarkPlusSolid;
