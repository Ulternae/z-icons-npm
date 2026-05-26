import React from 'react';

export interface LanHashtagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHashtagRegular: React.FC<LanHashtagRegularProps>;
export default LanHashtagRegular;
