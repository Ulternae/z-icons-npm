import React from 'react';

export interface CoreBedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBed(props: CoreBedProps): React.ReactElement;
export default CoreBed;
