import React from 'react';

export interface LanBriefsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefsRegular: React.FC<LanBriefsRegularProps>;
export default LanBriefsRegular;
