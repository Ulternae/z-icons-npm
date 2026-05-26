import React from 'react';

export interface LanBookmarkPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkPlusRegular: React.FC<LanBookmarkPlusRegularProps>;
export default LanBookmarkPlusRegular;
