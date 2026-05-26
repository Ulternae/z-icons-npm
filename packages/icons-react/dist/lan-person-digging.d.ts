import React from 'react';

export interface LanPersonDiggingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDigging: React.FC<LanPersonDiggingProps>;
export default LanPersonDigging;
