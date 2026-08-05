import React from 'react';

export interface LanHorseHeadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseHeadSolid(props: LanHorseHeadSolidProps): React.ReactElement;
export default LanHorseHeadSolid;
