import React from 'react';

export interface LanBulldozerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBulldozer(props: LanBulldozerProps): React.ReactElement;
export default LanBulldozer;
