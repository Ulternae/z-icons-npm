import React from 'react';

export interface LanLightCeilingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightCeilingRegular: React.FC<LanLightCeilingRegularProps>;
export default LanLightCeilingRegular;
