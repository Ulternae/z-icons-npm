import React from 'react';

export interface LanWonSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWonSign: React.FC<LanWonSignProps>;
export default LanWonSign;
