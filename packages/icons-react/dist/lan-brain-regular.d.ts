import React from 'react';

export interface LanBrainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrainRegular: React.FC<LanBrainRegularProps>;
export default LanBrainRegular;
