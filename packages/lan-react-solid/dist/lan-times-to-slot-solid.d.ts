import React from 'react';

export interface LanTimesToSlotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimesToSlotSolid(props: LanTimesToSlotSolidProps): React.ReactElement;
export default LanTimesToSlotSolid;
