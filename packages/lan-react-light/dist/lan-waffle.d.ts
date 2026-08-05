import React from 'react';

export interface LanWaffleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaffle(props: LanWaffleProps): React.ReactElement;
export default LanWaffle;
