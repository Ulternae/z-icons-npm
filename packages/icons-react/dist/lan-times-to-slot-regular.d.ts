import React from 'react';

export interface LanTimesToSlotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimesToSlotRegular: React.FC<LanTimesToSlotRegularProps>;
export default LanTimesToSlotRegular;
