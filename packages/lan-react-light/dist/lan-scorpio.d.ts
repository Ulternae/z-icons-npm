import React from 'react';

export interface LanScorpioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScorpio(props: LanScorpioProps): React.ReactElement;
export default LanScorpio;
