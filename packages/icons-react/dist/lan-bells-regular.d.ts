import React from 'react';

export interface LanBellsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellsRegular: React.FC<LanBellsRegularProps>;
export default LanBellsRegular;
