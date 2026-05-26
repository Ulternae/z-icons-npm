import React from 'react';

export interface LanBongRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBongRegular: React.FC<LanBongRegularProps>;
export default LanBongRegular;
