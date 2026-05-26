import React from 'react';

export interface LanPassportRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPassportRegular: React.FC<LanPassportRegularProps>;
export default LanPassportRegular;
