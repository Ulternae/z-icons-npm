import React from 'react';

export interface LanBedEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedEmpty: React.FC<LanBedEmptyProps>;
export default LanBedEmpty;
