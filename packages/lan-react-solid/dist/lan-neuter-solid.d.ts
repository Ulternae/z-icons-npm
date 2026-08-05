import React from 'react';

export interface LanNeuterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNeuterSolid(props: LanNeuterSolidProps): React.ReactElement;
export default LanNeuterSolid;
