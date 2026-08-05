import React from 'react';

export interface MinaWheelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWheel(props: MinaWheelProps): React.ReactElement;
export default MinaWheel;
