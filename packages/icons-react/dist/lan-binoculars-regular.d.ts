import React from 'react';

export interface LanBinocularsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinocularsRegular: React.FC<LanBinocularsRegularProps>;
export default LanBinocularsRegular;
