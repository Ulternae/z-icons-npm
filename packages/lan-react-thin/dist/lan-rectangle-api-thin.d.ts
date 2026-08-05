import React from 'react';

export interface LanRectangleApiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleApiThin(props: LanRectangleApiThinProps): React.ReactElement;
export default LanRectangleApiThin;
