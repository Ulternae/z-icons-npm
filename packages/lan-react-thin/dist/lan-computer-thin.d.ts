import React from 'react';

export interface LanComputerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerThin(props: LanComputerThinProps): React.ReactElement;
export default LanComputerThin;
