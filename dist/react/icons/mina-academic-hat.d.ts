import React from 'react';

export interface MinaAcademicHatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAcademicHat: React.FC<MinaAcademicHatProps>;
export default MinaAcademicHat;
