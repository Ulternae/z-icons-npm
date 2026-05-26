import React from 'react';

export interface LanGameConsoleHandheldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameConsoleHandheld: React.FC<LanGameConsoleHandheldProps>;
export default LanGameConsoleHandheld;
