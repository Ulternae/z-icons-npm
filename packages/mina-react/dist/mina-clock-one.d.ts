import React from 'react';

export interface MinaClockOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockOne(props: MinaClockOneProps): React.ReactElement;
export default MinaClockOne;
