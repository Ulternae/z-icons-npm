import React from 'react';

export interface LanComputerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerRegular(props: LanComputerRegularProps): React.ReactElement;
export default LanComputerRegular;
