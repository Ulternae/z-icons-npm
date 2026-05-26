import React from 'react';

export interface LanFaceDroolingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDroolingThin: React.FC<LanFaceDroolingThinProps>;
export default LanFaceDroolingThin;
