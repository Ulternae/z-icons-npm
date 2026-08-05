import React from 'react';

export interface LanHandPointUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointUpSolid(props: LanHandPointUpSolidProps): React.ReactElement;
export default LanHandPointUpSolid;
