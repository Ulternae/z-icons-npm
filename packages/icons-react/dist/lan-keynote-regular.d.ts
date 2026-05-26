import React from 'react';

export interface LanKeynoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeynoteRegular: React.FC<LanKeynoteRegularProps>;
export default LanKeynoteRegular;
