import React from 'react';

export interface LanPretzelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPretzelSolid(props: LanPretzelSolidProps): React.ReactElement;
export default LanPretzelSolid;
