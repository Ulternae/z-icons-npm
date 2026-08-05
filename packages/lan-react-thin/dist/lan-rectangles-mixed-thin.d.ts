import React from 'react';

export interface LanRectanglesMixedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectanglesMixedThin(props: LanRectanglesMixedThinProps): React.ReactElement;
export default LanRectanglesMixedThin;
