import React from 'react';

export interface LanBoomboxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoomboxRegular: React.FC<LanBoomboxRegularProps>;
export default LanBoomboxRegular;
