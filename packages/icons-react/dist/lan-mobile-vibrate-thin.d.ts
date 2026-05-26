import React from 'react';

export interface LanMobileVibrateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileVibrateThin: React.FC<LanMobileVibrateThinProps>;
export default LanMobileVibrateThin;
