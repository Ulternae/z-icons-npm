import React from 'react';

export interface CoreFlowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFlower(props: CoreFlowerProps): React.ReactElement;
export default CoreFlower;
