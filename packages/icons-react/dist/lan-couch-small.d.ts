import React from 'react';

export interface LanCouchSmallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCouchSmall: React.FC<LanCouchSmallProps>;
export default LanCouchSmall;
