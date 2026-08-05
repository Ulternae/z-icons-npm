import React from 'react';

export interface LanComputerMouseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerMouseThin(props: LanComputerMouseThinProps): React.ReactElement;
export default LanComputerMouseThin;
