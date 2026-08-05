import React from 'react';

export interface LanComputerClassicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerClassicThin(props: LanComputerClassicThinProps): React.ReactElement;
export default LanComputerClassicThin;
