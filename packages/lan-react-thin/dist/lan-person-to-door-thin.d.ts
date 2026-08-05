import React from 'react';

export interface LanPersonToDoorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonToDoorThin(props: LanPersonToDoorThinProps): React.ReactElement;
export default LanPersonToDoorThin;
