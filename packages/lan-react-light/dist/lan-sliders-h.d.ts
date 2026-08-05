import React from 'react';

export interface LanSlidersHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersH(props: LanSlidersHProps): React.ReactElement;
export default LanSlidersH;
