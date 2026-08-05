import React from 'react';

export interface LanNeuterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNeuterThin(props: LanNeuterThinProps): React.ReactElement;
export default LanNeuterThin;
