import React from 'react';

export interface CoreGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGear(props: CoreGearProps): React.ReactElement;
export default CoreGear;
