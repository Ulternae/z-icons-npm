import React from 'react';

export interface LanPassportSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPassportSolid(props: LanPassportSolidProps): React.ReactElement;
export default LanPassportSolid;
