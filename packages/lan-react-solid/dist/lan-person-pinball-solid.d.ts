import React from 'react';

export interface LanPersonPinballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonPinballSolid(props: LanPersonPinballSolidProps): React.ReactElement;
export default LanPersonPinballSolid;
