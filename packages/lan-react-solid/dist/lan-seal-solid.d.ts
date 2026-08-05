import React from 'react';

export interface LanSealSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSealSolid(props: LanSealSolidProps): React.ReactElement;
export default LanSealSolid;
