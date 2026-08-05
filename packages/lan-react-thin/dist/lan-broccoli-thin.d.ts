import React from 'react';

export interface LanBroccoliThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroccoliThin(props: LanBroccoliThinProps): React.ReactElement;
export default LanBroccoliThin;
