import React from 'react';

export interface LanBedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBed: React.FC<LanBedProps>;
export default LanBed;
