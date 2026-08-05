import React from 'react';

export interface LanHamsaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHamsa(props: LanHamsaProps): React.ReactElement;
export default LanHamsa;
