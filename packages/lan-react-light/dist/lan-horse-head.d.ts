import React from 'react';

export interface LanHorseHeadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseHead(props: LanHorseHeadProps): React.ReactElement;
export default LanHorseHead;
