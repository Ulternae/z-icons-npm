import React from 'react';

export interface LanLibraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLibraRegular: React.FC<LanLibraRegularProps>;
export default LanLibraRegular;
