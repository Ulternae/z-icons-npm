import React from 'react';

export interface LanRectangleNAThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleNAThin(props: LanRectangleNAThinProps): React.ReactElement;
export default LanRectangleNAThin;
