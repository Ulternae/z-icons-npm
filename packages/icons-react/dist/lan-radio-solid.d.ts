import React from 'react';

export interface LanRadioSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadioSolid: React.FC<LanRadioSolidProps>;
export default LanRadioSolid;
