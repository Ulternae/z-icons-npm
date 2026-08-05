import React from 'react';

export interface LanCupTogoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupTogoSolid(props: LanCupTogoSolidProps): React.ReactElement;
export default LanCupTogoSolid;
