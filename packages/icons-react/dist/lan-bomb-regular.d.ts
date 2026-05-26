import React from 'react';

export interface LanBombRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBombRegular: React.FC<LanBombRegularProps>;
export default LanBombRegular;
