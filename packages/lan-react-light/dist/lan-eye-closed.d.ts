import React from 'react';

export interface LanEyeClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeClosed(props: LanEyeClosedProps): React.ReactElement;
export default LanEyeClosed;
