import React from 'react';

export interface LanCouchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCouchSolid: React.FC<LanCouchSolidProps>;
export default LanCouchSolid;
