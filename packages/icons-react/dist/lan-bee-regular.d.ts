import React from 'react';

export interface LanBeeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeeRegular: React.FC<LanBeeRegularProps>;
export default LanBeeRegular;
