import React from 'react';

export interface LanBulldozerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBulldozerSolid(props: LanBulldozerSolidProps): React.ReactElement;
export default LanBulldozerSolid;
