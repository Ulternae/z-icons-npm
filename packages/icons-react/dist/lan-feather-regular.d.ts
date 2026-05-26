import React from 'react';

export interface LanFeatherRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFeatherRegular: React.FC<LanFeatherRegularProps>;
export default LanFeatherRegular;
