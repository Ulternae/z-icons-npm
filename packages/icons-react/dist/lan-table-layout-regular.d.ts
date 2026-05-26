import React from 'react';

export interface LanTableLayoutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableLayoutRegular: React.FC<LanTableLayoutRegularProps>;
export default LanTableLayoutRegular;
