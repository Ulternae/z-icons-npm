import React from 'react';

export interface LanPersonMilitaryPointingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonMilitaryPointing(props: LanPersonMilitaryPointingProps): React.ReactElement;
export default LanPersonMilitaryPointing;
