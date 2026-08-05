import React from 'react';

export interface LanTerminalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTerminalRegular(props: LanTerminalRegularProps): React.ReactElement;
export default LanTerminalRegular;
