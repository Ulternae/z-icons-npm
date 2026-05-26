import React from 'react';

export interface LanPersonFallingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFallingRegular: React.FC<LanPersonFallingRegularProps>;
export default LanPersonFallingRegular;
