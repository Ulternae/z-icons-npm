import React from 'react';

export interface LanRectangleTallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleTallRegular: React.FC<LanRectangleTallRegularProps>;
export default LanRectangleTallRegular;
