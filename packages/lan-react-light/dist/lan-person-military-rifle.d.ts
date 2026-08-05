import React from 'react';

export interface LanPersonMilitaryRifleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonMilitaryRifle(props: LanPersonMilitaryRifleProps): React.ReactElement;
export default LanPersonMilitaryRifle;
