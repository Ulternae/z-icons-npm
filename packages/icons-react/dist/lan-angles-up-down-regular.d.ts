import React from 'react';

export interface LanAnglesUpDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnglesUpDownRegular: React.FC<LanAnglesUpDownRegularProps>;
export default LanAnglesUpDownRegular;
