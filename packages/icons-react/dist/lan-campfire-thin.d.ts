import React from 'react';

export interface LanCampfireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCampfireThin: React.FC<LanCampfireThinProps>;
export default LanCampfireThin;
