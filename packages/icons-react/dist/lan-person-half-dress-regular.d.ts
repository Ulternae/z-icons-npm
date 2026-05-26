import React from 'react';

export interface LanPersonHalfDressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonHalfDressRegular: React.FC<LanPersonHalfDressRegularProps>;
export default LanPersonHalfDressRegular;
