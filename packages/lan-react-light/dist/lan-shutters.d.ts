import React from 'react';

export interface LanShuttersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShutters(props: LanShuttersProps): React.ReactElement;
export default LanShutters;
