import React from 'react';

export interface MinaClockElevenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockEleven(props: MinaClockElevenProps): React.ReactElement;
export default MinaClockEleven;
