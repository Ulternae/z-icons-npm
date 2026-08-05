import React from 'react';

export interface LanSpadeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpadeSolid(props: LanSpadeSolidProps): React.ReactElement;
export default LanSpadeSolid;
