import React from 'react';

export interface LanSuitcaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcaseThin: React.FC<LanSuitcaseThinProps>;
export default LanSuitcaseThin;
