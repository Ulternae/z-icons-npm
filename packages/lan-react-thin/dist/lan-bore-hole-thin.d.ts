import React from 'react';

export interface LanBoreHoleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoreHoleThin(props: LanBoreHoleThinProps): React.ReactElement;
export default LanBoreHoleThin;
