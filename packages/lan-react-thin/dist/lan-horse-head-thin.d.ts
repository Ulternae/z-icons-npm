import React from 'react';

export interface LanHorseHeadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseHeadThin(props: LanHorseHeadThinProps): React.ReactElement;
export default LanHorseHeadThin;
