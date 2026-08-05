import React from 'react';

export interface LanTimesToSlotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimesToSlotThin(props: LanTimesToSlotThinProps): React.ReactElement;
export default LanTimesToSlotThin;
