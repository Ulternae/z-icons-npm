import React from 'react';

export interface LanComputerMouseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComputerMouseRegular(props: LanComputerMouseRegularProps): React.ReactElement;
export default LanComputerMouseRegular;
