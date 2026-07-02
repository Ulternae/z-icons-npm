import React from 'react';

export interface CoreTrainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTrainSolid(props: CoreTrainSolidProps): React.ReactElement;
export default CoreTrainSolid;
