import React from 'react';

export interface LanTrilliumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrilliumRegular: React.FC<LanTrilliumRegularProps>;
export default LanTrilliumRegular;
