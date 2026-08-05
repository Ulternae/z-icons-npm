import React from 'react';

export interface LanPersonToDoorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonToDoor(props: LanPersonToDoorProps): React.ReactElement;
export default LanPersonToDoor;
