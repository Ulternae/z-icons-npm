import React from 'react';

export interface LanInhalerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInhalerThin(props: LanInhalerThinProps): React.ReactElement;
export default LanInhalerThin;
