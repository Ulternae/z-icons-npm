import React from 'react';

export interface LanUserCogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCogSolid(props: LanUserCogSolidProps): React.ReactElement;
export default LanUserCogSolid;
