import React from 'react';

export interface LanPlantWiltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlantWiltThin(props: LanPlantWiltThinProps): React.ReactElement;
export default LanPlantWiltThin;
