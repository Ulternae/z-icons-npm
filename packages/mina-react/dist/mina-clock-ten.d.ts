import React from 'react';

export interface MinaClockTenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockTen(props: MinaClockTenProps): React.ReactElement;
export default MinaClockTen;
