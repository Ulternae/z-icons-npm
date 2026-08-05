import React from 'react';

export interface LanTrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainSolid(props: LanTrainSolidProps): React.ReactElement;
export default LanTrainSolid;
