import React from 'react';

export interface LanTractorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTractorThin: React.FC<LanTractorThinProps>;
export default LanTractorThin;
