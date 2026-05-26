import React from 'react';

export interface LanEggplantRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEggplantRegular: React.FC<LanEggplantRegularProps>;
export default LanEggplantRegular;
