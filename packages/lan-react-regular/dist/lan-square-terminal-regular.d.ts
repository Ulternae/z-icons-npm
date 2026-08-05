import React from 'react';

export interface LanSquareTerminalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTerminalRegular(props: LanSquareTerminalRegularProps): React.ReactElement;
export default LanSquareTerminalRegular;
