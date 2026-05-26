import React from 'react';

export interface LanDownUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownUp: React.FC<LanDownUpProps>;
export default LanDownUp;
