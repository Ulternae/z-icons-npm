import React from 'react';

export interface LanShowerAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShowerAltRegular: React.FC<LanShowerAltRegularProps>;
export default LanShowerAltRegular;
