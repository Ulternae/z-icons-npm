import React from 'react';

export interface LanUserGraduateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserGraduateSolid(props: LanUserGraduateSolidProps): React.ReactElement;
export default LanUserGraduateSolid;
