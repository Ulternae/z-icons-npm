import React from 'react';

export interface LanPlateWheatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlateWheatSolid(props: LanPlateWheatSolidProps): React.ReactElement;
export default LanPlateWheatSolid;
