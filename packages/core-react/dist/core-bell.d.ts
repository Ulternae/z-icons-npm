import React from 'react';

export interface CoreBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBell(props: CoreBellProps): React.ReactElement;
export default CoreBell;
