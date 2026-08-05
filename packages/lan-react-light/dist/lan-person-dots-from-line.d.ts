import React from 'react';

export interface LanPersonDotsFromLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDotsFromLine(props: LanPersonDotsFromLineProps): React.ReactElement;
export default LanPersonDotsFromLine;
