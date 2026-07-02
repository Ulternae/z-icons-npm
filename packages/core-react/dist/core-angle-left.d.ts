import React from 'react';

export interface CoreAngleLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAngleLeft(props: CoreAngleLeftProps): React.ReactElement;
export default CoreAngleLeft;
