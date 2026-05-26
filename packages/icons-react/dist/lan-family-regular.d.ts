import React from 'react';

export interface LanFamilyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFamilyRegular: React.FC<LanFamilyRegularProps>;
export default LanFamilyRegular;
