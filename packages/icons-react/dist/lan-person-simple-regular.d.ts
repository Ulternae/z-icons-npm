import React from 'react';

export interface LanPersonSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSimpleRegular: React.FC<LanPersonSimpleRegularProps>;
export default LanPersonSimpleRegular;
