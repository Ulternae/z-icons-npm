import React from 'react';

export interface LanBookmarkCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkCircleRegular: React.FC<LanBookmarkCircleRegularProps>;
export default LanBookmarkCircleRegular;
