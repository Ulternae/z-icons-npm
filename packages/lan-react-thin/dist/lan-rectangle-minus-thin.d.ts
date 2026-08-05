import React from 'react';

export interface LanRectangleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleMinusThin(props: LanRectangleMinusThinProps): React.ReactElement;
export default LanRectangleMinusThin;
