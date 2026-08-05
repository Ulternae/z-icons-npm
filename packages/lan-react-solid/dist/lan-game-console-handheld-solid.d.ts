import React from 'react';

export interface LanGameConsoleHandheldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameConsoleHandheldSolid(props: LanGameConsoleHandheldSolidProps): React.ReactElement;
export default LanGameConsoleHandheldSolid;
