import React from 'react';

export interface LanBookmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkRegular: React.FC<LanBookmarkRegularProps>;
export default LanBookmarkRegular;
