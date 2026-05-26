import React from 'react';

export interface LanBlindsOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlindsOpen: React.FC<LanBlindsOpenProps>;
export default LanBlindsOpen;
