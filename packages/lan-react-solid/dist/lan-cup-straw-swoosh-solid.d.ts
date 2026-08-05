import React from 'react';

export interface LanCupStrawSwooshSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupStrawSwooshSolid(props: LanCupStrawSwooshSolidProps): React.ReactElement;
export default LanCupStrawSwooshSolid;
