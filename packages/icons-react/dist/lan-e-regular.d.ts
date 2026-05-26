import React from 'react';

export interface LanERegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanERegular: React.FC<LanERegularProps>;
export default LanERegular;
