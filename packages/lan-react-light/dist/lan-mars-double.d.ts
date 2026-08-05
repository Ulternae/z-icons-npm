import React from 'react';

export interface LanMarsDoubleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsDouble(props: LanMarsDoubleProps): React.ReactElement;
export default LanMarsDouble;
