import React from 'react';

export interface LanMangoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMango(props: LanMangoProps): React.ReactElement;
export default LanMango;
