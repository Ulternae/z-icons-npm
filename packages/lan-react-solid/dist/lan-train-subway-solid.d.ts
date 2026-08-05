import React from 'react';

export interface LanTrainSubwaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainSubwaySolid(props: LanTrainSubwaySolidProps): React.ReactElement;
export default LanTrainSubwaySolid;
