import React from 'react';

export interface LanComputerMouseScrollwheelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerMouseScrollwheel(props: LanComputerMouseScrollwheelProps): React.ReactElement;
export default LanComputerMouseScrollwheel;
