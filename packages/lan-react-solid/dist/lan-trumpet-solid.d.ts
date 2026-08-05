import React from 'react';

export interface LanTrumpetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrumpetSolid(props: LanTrumpetSolidProps): React.ReactElement;
export default LanTrumpetSolid;
