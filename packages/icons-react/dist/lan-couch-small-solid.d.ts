import React from 'react';

export interface LanCouchSmallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCouchSmallSolid: React.FC<LanCouchSmallSolidProps>;
export default LanCouchSmallSolid;
