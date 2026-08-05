import React from 'react';

export interface LanBinBottlesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinBottlesThin(props: LanBinBottlesThinProps): React.ReactElement;
export default LanBinBottlesThin;
