import React from 'react';

export interface LanGameConsoleHandheldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameConsoleHandheld(props: LanGameConsoleHandheldProps): React.ReactElement;
export default LanGameConsoleHandheld;
