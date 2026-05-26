import React from 'react';

export interface LanDeskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDeskRegular: React.FC<LanDeskRegularProps>;
export default LanDeskRegular;
