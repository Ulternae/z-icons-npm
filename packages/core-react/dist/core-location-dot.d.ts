import React from 'react';

export interface CoreLocationDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLocationDot(props: CoreLocationDotProps): React.ReactElement;
export default CoreLocationDot;
