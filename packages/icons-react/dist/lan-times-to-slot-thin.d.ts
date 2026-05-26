import React from 'react';

export interface LanTimesToSlotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimesToSlotThin: React.FC<LanTimesToSlotThinProps>;
export default LanTimesToSlotThin;
