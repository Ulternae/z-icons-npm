import React from 'react';

export interface LanWonSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWonSignSolid: React.FC<LanWonSignSolidProps>;
export default LanWonSignSolid;
