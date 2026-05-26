import React from 'react';

export interface LanColonSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanColonSign: React.FC<LanColonSignProps>;
export default LanColonSign;
