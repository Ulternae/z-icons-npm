import React from 'react';

export interface LanBraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBraRegular: React.FC<LanBraRegularProps>;
export default LanBraRegular;
