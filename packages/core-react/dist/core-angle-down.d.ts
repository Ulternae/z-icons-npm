import React from 'react';

export interface CoreAngleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAngleDown(props: CoreAngleDownProps): React.ReactElement;
export default CoreAngleDown;
