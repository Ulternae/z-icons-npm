import React from 'react';

export interface LanFaceDroolingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDroolingRegular: React.FC<LanFaceDroolingRegularProps>;
export default LanFaceDroolingRegular;
