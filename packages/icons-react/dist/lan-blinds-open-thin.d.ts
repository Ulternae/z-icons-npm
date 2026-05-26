import React from 'react';

export interface LanBlindsOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlindsOpenThin: React.FC<LanBlindsOpenThinProps>;
export default LanBlindsOpenThin;
