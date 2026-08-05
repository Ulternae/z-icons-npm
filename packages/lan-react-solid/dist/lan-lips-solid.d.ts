import React from 'react';

export interface LanLipsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLipsSolid(props: LanLipsSolidProps): React.ReactElement;
export default LanLipsSolid;
