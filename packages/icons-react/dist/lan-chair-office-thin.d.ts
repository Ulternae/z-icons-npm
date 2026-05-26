import React from 'react';

export interface LanChairOfficeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChairOfficeThin: React.FC<LanChairOfficeThinProps>;
export default LanChairOfficeThin;
