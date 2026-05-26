import React from 'react';

export interface LanChopsticksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChopsticksThin: React.FC<LanChopsticksThinProps>;
export default LanChopsticksThin;
