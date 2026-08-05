import React from 'react';

export interface LanGreaterThanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGreaterThanSolid(props: LanGreaterThanSolidProps): React.ReactElement;
export default LanGreaterThanSolid;
