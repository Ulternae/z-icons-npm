import React from 'react';

export interface CoreUnderlineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUnderlineSolid(props: CoreUnderlineSolidProps): React.ReactElement;
export default CoreUnderlineSolid;
