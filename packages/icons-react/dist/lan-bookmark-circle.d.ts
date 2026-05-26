import React from 'react';

export interface LanBookmarkCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkCircle: React.FC<LanBookmarkCircleProps>;
export default LanBookmarkCircle;
