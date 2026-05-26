import React from 'react';

export interface LanYenSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanYenSign: React.FC<LanYenSignProps>;
export default LanYenSign;
