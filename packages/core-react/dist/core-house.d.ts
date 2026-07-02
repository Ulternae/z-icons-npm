import React from 'react';

export interface CoreHouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHouse(props: CoreHouseProps): React.ReactElement;
export default CoreHouse;
