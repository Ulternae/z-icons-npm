import React from 'react';

export interface LanShuttersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShuttersRegular(props: LanShuttersRegularProps): React.ReactElement;
export default LanShuttersRegular;
