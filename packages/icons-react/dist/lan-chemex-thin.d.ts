import React from 'react';

export interface LanChemexThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChemexThin: React.FC<LanChemexThinProps>;
export default LanChemexThin;
