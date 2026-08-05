import React from 'react';

export interface LanGameConsoleHandheldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameConsoleHandheldRegular(props: LanGameConsoleHandheldRegularProps): React.ReactElement;
export default LanGameConsoleHandheldRegular;
