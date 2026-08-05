import React from 'react';

export interface LanRectangleAdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleAdThin(props: LanRectangleAdThinProps): React.ReactElement;
export default LanRectangleAdThin;
