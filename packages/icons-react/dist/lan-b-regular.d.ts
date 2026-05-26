import React from 'react';

export interface LanBRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBRegular: React.FC<LanBRegularProps>;
export default LanBRegular;
