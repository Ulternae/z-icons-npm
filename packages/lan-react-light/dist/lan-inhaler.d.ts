import React from 'react';

export interface LanInhalerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInhaler(props: LanInhalerProps): React.ReactElement;
export default LanInhaler;
