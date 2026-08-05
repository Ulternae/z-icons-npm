import React from 'react';

export interface LanManholeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanManhole(props: LanManholeProps): React.ReactElement;
export default LanManhole;
