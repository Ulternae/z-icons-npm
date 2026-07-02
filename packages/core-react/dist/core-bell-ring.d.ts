import React from 'react';

export interface CoreBellRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBellRing(props: CoreBellRingProps): React.ReactElement;
export default CoreBellRing;
