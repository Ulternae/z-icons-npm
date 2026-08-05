import React from 'react';

export interface LanTimesToSlotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimesToSlotRegular(props: LanTimesToSlotRegularProps): React.ReactElement;
export default LanTimesToSlotRegular;
