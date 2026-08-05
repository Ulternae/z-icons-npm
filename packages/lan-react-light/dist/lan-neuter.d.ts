import React from 'react';

export interface LanNeuterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNeuter(props: LanNeuterProps): React.ReactElement;
export default LanNeuter;
