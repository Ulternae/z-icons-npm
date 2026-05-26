import React from 'react';

export interface LanPersonDiggingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDiggingRegular: React.FC<LanPersonDiggingRegularProps>;
export default LanPersonDiggingRegular;
