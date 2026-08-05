import React from 'react';

export interface LanCupStrawSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupStrawSolid(props: LanCupStrawSolidProps): React.ReactElement;
export default LanCupStrawSolid;
