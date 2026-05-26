import React from 'react';

export interface LanBullhornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullhornSolid: React.FC<LanBullhornSolidProps>;
export default LanBullhornSolid;
