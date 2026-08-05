import React from 'react';

export interface LanSlidersVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersV(props: LanSlidersVProps): React.ReactElement;
export default LanSlidersV;
