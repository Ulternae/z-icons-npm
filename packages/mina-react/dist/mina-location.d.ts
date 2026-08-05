import React from 'react';

export interface MinaLocationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocation(props: MinaLocationProps): React.ReactElement;
export default MinaLocation;
