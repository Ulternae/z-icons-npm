import React from 'react';

export interface LanPlantWiltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlantWiltRegular(props: LanPlantWiltRegularProps): React.ReactElement;
export default LanPlantWiltRegular;
