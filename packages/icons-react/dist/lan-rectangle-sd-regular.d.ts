import React from 'react';

export interface LanRectangleSdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleSdRegular: React.FC<LanRectangleSdRegularProps>;
export default LanRectangleSdRegular;
