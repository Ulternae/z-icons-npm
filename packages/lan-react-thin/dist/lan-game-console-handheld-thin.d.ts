import React from 'react';

export interface LanGameConsoleHandheldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameConsoleHandheldThin(props: LanGameConsoleHandheldThinProps): React.ReactElement;
export default LanGameConsoleHandheldThin;
