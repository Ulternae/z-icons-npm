import React from 'react';

export interface LanDropletDegreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletDegree(props: LanDropletDegreeProps): React.ReactElement;
export default LanDropletDegree;
