import React from 'react';

export interface LanDropletDegreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletDegreeRegular(props: LanDropletDegreeRegularProps): React.ReactElement;
export default LanDropletDegreeRegular;
