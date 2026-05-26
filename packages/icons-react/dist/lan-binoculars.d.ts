import React from 'react';

export interface LanBinocularsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinoculars: React.FC<LanBinocularsProps>;
export default LanBinoculars;
