import React from 'react';

export interface LanRectangle4kRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangle4kRegular: React.FC<LanRectangle4kRegularProps>;
export default LanRectangle4kRegular;
