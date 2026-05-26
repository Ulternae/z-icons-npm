import React from 'react';

export interface LanListCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListCheckSolid: React.FC<LanListCheckSolidProps>;
export default LanListCheckSolid;
