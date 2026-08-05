import React from 'react';

export interface LanEggSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEggSolid(props: LanEggSolidProps): React.ReactElement;
export default LanEggSolid;
