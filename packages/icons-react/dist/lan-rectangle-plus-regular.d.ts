import React from 'react';

export interface LanRectanglePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglePlusRegular: React.FC<LanRectanglePlusRegularProps>;
export default LanRectanglePlusRegular;
