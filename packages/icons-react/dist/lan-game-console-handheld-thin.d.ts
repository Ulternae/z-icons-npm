import React from 'react';

export interface LanGameConsoleHandheldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameConsoleHandheldThin: React.FC<LanGameConsoleHandheldThinProps>;
export default LanGameConsoleHandheldThin;
