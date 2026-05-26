import React from 'react';

export interface LanEyeClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeClosed: React.FC<LanEyeClosedProps>;
export default LanEyeClosed;
