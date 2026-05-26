import React from 'react';

export interface LanKidneysProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKidneys: React.FC<LanKidneysProps>;
export default LanKidneys;
