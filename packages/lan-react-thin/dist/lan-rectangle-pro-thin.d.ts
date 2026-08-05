import React from 'react';

export interface LanRectangleProThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleProThin(props: LanRectangleProThinProps): React.ReactElement;
export default LanRectangleProThin;
