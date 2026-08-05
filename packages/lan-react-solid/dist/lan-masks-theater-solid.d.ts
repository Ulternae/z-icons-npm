import React from 'react';

export interface LanMasksTheaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMasksTheaterSolid(props: LanMasksTheaterSolidProps): React.ReactElement;
export default LanMasksTheaterSolid;
