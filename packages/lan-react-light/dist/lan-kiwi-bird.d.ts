import React from 'react';

export interface LanKiwiBirdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKiwiBird(props: LanKiwiBirdProps): React.ReactElement;
export default LanKiwiBird;
