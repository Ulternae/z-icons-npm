import React from 'react';

export interface LanRectangleBetaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleBetaRegular: React.FC<LanRectangleBetaRegularProps>;
export default LanRectangleBetaRegular;
