import React from 'react';

export interface LanFaxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaxRegular: React.FC<LanFaxRegularProps>;
export default LanFaxRegular;
