import React from 'react';

export interface LanOvenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOven(props: LanOvenProps): React.ReactElement;
export default LanOven;
