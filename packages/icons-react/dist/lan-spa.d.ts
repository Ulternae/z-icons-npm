import React from 'react';

export interface LanSpaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpa: React.FC<LanSpaProps>;
export default LanSpa;
