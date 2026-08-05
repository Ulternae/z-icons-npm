import React from 'react';

export interface LanLSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLSolid(props: LanLSolidProps): React.ReactElement;
export default LanLSolid;
