import React from 'react';

export interface LanRectangleIrcRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleIrcRegular: React.FC<LanRectangleIrcRegularProps>;
export default LanRectangleIrcRegular;
