import React from 'react';

export interface LanBookmarkCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkCircleSolid: React.FC<LanBookmarkCircleSolidProps>;
export default LanBookmarkCircleSolid;
