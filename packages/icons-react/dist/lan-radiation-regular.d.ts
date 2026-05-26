import React from 'react';

export interface LanRadiationRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadiationRegular: React.FC<LanRadiationRegularProps>;
export default LanRadiationRegular;
