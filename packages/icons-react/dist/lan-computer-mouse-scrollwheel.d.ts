import React from 'react';

export interface LanComputerMouseScrollwheelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComputerMouseScrollwheel: React.FC<LanComputerMouseScrollwheelProps>;
export default LanComputerMouseScrollwheel;
