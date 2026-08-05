import React from 'react';

export interface LanRectangleWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleWideThin(props: LanRectangleWideThinProps): React.ReactElement;
export default LanRectangleWideThin;
