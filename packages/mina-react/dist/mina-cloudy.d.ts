import React from 'react';

export interface MinaCloudyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCloudy(props: MinaCloudyProps): React.ReactElement;
export default MinaCloudy;
