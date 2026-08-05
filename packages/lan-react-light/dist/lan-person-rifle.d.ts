import React from 'react';

export interface LanPersonRifleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRifle(props: LanPersonRifleProps): React.ReactElement;
export default LanPersonRifle;
