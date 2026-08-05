import React from 'react';

export interface LanMicrowaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrowave(props: LanMicrowaveProps): React.ReactElement;
export default LanMicrowave;
