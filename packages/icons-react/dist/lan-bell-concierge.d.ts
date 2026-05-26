import React from 'react';

export interface LanBellConciergeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellConcierge: React.FC<LanBellConciergeProps>;
export default LanBellConcierge;
