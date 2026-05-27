import React from 'react';

export interface CoreHourglassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHourglass: React.FC<CoreHourglassProps>;
export default CoreHourglass;
