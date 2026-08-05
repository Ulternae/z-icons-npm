import React from 'react';

export interface LanRectangleIrcThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleIrcThin(props: LanRectangleIrcThinProps): React.ReactElement;
export default LanRectangleIrcThin;
