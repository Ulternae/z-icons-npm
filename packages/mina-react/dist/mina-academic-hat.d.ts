import React from 'react';

export interface MinaAcademicHatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAcademicHat(props: MinaAcademicHatProps): React.ReactElement;
export default MinaAcademicHat;
