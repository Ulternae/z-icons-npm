import React from 'react';

export interface LanGameConsoleHandheldCrankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameConsoleHandheldCrank: React.FC<LanGameConsoleHandheldCrankProps>;
export default LanGameConsoleHandheldCrank;
