import React from 'react';

export interface LanUserGraduateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGraduate: React.FC<LanUserGraduateProps>;
export default LanUserGraduate;
