import React from 'react';

export interface LanCalendarImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarImage: React.FC<LanCalendarImageProps>;
export default LanCalendarImage;
