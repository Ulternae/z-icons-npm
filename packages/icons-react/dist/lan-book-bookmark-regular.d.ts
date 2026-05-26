import React from 'react';

export interface LanBookBookmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookBookmarkRegular: React.FC<LanBookBookmarkRegularProps>;
export default LanBookBookmarkRegular;
