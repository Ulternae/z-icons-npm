import React from 'react';

export interface NeoHourglassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHourglass: React.FC<NeoHourglassProps>;
export default NeoHourglass;
