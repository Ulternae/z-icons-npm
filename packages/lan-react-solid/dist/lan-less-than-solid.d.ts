import React from 'react';

export interface LanLessThanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLessThanSolid(props: LanLessThanSolidProps): React.ReactElement;
export default LanLessThanSolid;
