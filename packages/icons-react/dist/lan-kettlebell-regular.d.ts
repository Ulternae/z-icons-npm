import React from 'react';

export interface LanKettlebellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKettlebellRegular: React.FC<LanKettlebellRegularProps>;
export default LanKettlebellRegular;
