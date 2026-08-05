import React from 'react';

export interface LanPlateWheatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlateWheat(props: LanPlateWheatProps): React.ReactElement;
export default LanPlateWheat;
