import React from 'react';

export interface MinaSignalCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalCircle: React.FC<MinaSignalCircleProps>;
export default MinaSignalCircle;
