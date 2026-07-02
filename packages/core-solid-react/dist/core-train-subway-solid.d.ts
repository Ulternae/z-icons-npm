import React from 'react';

export interface CoreTrainSubwaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTrainSubwaySolid(props: CoreTrainSubwaySolidProps): React.ReactElement;
export default CoreTrainSubwaySolid;
