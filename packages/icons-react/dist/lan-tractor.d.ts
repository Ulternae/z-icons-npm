import React from 'react';

export interface LanTractorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTractor: React.FC<LanTractorProps>;
export default LanTractor;
