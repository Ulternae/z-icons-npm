import React from 'react';

export interface LanCroissantSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCroissantSolid(props: LanCroissantSolidProps): React.ReactElement;
export default LanCroissantSolid;
