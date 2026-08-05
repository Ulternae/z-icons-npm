import React from 'react';

export interface LanPersonToDoorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonToDoorRegular(props: LanPersonToDoorRegularProps): React.ReactElement;
export default LanPersonToDoorRegular;
