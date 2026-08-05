import React from 'react';

export interface LanUserNurseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserNurse(props: LanUserNurseProps): React.ReactElement;
export default LanUserNurse;
