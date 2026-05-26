import React from 'react';

export interface LanBatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBatRegular: React.FC<LanBatRegularProps>;
export default LanBatRegular;
