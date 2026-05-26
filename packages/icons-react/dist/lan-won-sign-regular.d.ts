import React from 'react';

export interface LanWonSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWonSignRegular: React.FC<LanWonSignRegularProps>;
export default LanWonSignRegular;
