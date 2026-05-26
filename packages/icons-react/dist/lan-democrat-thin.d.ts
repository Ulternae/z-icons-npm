import React from 'react';

export interface LanDemocratThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDemocratThin: React.FC<LanDemocratThinProps>;
export default LanDemocratThin;
