import React from 'react';

export interface LanHandSpockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandSpockRegular: React.FC<LanHandSpockRegularProps>;
export default LanHandSpockRegular;
