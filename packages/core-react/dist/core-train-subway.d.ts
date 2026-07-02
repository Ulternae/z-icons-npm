import React from 'react';

export interface CoreTrainSubwayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTrainSubway(props: CoreTrainSubwayProps): React.ReactElement;
export default CoreTrainSubway;
