import React from 'react';

export interface LanHorseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorse(props: LanHorseProps): React.ReactElement;
export default LanHorse;
