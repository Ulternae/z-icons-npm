import React from 'react';

export interface LanPlateWheatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlateWheatThin(props: LanPlateWheatThinProps): React.ReactElement;
export default LanPlateWheatThin;
