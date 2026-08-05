import React from 'react';

export interface LanGameConsoleHandheldCrankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameConsoleHandheldCrank(props: LanGameConsoleHandheldCrankProps): React.ReactElement;
export default LanGameConsoleHandheldCrank;
