import React from 'react';

export interface CoreBedEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBedEmpty(props: CoreBedEmptyProps): React.ReactElement;
export default CoreBedEmpty;
