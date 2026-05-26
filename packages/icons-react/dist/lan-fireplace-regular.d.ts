import React from 'react';

export interface LanFireplaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireplaceRegular: React.FC<LanFireplaceRegularProps>;
export default LanFireplaceRegular;
