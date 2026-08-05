import React from 'react';

export interface LanRectangleNewThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleNewThin(props: LanRectangleNewThinProps): React.ReactElement;
export default LanRectangleNewThin;
