import React from 'react';

export interface LanCouchSmallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCouchSmallThin: React.FC<LanCouchSmallThinProps>;
export default LanCouchSmallThin;
