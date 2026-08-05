import React from 'react';

export interface LanChopsticksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChopsticksThin(props: LanChopsticksThinProps): React.ReactElement;
export default LanChopsticksThin;
