import React from 'react';

export interface CorePersonBikingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePersonBiking(props: CorePersonBikingProps): React.ReactElement;
export default CorePersonBiking;
