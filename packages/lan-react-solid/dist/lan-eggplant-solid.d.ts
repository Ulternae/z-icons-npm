import React from 'react';

export interface LanEggplantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEggplantSolid(props: LanEggplantSolidProps): React.ReactElement;
export default LanEggplantSolid;
