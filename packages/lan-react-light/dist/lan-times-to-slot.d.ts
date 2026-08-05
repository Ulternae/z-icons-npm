import React from 'react';

export interface LanTimesToSlotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimesToSlot(props: LanTimesToSlotProps): React.ReactElement;
export default LanTimesToSlot;
