import React from 'react';

export interface LanUserGraduateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserGraduate(props: LanUserGraduateProps): React.ReactElement;
export default LanUserGraduate;
