import React from 'react';

export interface LanBagelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagel(props: LanBagelProps): React.ReactElement;
export default LanBagel;
