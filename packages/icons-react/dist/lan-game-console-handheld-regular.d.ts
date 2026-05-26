import React from 'react';

export interface LanGameConsoleHandheldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameConsoleHandheldRegular: React.FC<LanGameConsoleHandheldRegularProps>;
export default LanGameConsoleHandheldRegular;
