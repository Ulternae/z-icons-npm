import React from 'react';

export interface LanTimesToSlotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimesToSlot: React.FC<LanTimesToSlotProps>;
export default LanTimesToSlot;
