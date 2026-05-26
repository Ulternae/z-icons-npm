import React from 'react';

export interface LanWheatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheat: React.FC<LanWheatProps>;
export default LanWheat;
