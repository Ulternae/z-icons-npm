import React from 'react';

export interface LanLollipopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLollipopSolid(props: LanLollipopSolidProps): React.ReactElement;
export default LanLollipopSolid;
