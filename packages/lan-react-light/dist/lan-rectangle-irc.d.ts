import React from 'react';

export interface LanRectangleIrcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleIrc(props: LanRectangleIrcProps): React.ReactElement;
export default LanRectangleIrc;
