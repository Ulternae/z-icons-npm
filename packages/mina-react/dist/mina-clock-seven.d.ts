import React from 'react';

export interface MinaClockSevenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockSeven(props: MinaClockSevenProps): React.ReactElement;
export default MinaClockSeven;
