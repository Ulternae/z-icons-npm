import React from 'react';

export interface LanBurritoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurritoThin(props: LanBurritoThinProps): React.ReactElement;
export default LanBurritoThin;
