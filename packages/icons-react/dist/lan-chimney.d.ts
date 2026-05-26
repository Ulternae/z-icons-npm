import React from 'react';

export interface LanChimneyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChimney: React.FC<LanChimneyProps>;
export default LanChimney;
