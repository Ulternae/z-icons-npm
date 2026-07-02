import React from 'react';

export interface CoreCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCirclePlus(props: CoreCirclePlusProps): React.ReactElement;
export default CoreCirclePlus;
