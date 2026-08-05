import React from 'react';

export interface LanPersonMilitaryToPersonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonMilitaryToPerson(props: LanPersonMilitaryToPersonProps): React.ReactElement;
export default LanPersonMilitaryToPerson;
