import React from 'react';

export interface LanCitrusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCitrus: React.FC<LanCitrusProps>;
export default LanCitrus;
