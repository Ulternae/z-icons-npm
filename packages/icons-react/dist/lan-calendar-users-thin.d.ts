import React from 'react';

export interface LanCalendarUsersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarUsersThin: React.FC<LanCalendarUsersThinProps>;
export default LanCalendarUsersThin;
