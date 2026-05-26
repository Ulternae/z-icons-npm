import React from 'react';

export interface LanSRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSRegular: React.FC<LanSRegularProps>;
export default LanSRegular;
