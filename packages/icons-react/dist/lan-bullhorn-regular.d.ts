import React from 'react';

export interface LanBullhornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullhornRegular: React.FC<LanBullhornRegularProps>;
export default LanBullhornRegular;
