import React from 'react';

export interface LanCampfireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCampfireRegular: React.FC<LanCampfireRegularProps>;
export default LanCampfireRegular;
