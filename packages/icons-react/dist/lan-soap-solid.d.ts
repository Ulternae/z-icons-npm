import React from 'react';

export interface LanSoapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSoapSolid: React.FC<LanSoapSolidProps>;
export default LanSoapSolid;
