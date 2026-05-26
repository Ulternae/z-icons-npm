import React from 'react';

export interface LanIciclesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIciclesRegular: React.FC<LanIciclesRegularProps>;
export default LanIciclesRegular;
