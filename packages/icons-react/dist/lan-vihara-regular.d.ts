import React from 'react';

export interface LanViharaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanViharaRegular: React.FC<LanViharaRegularProps>;
export default LanViharaRegular;
