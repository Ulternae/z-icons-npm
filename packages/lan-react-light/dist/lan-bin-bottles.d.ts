import React from 'react';

export interface LanBinBottlesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinBottles(props: LanBinBottlesProps): React.ReactElement;
export default LanBinBottles;
