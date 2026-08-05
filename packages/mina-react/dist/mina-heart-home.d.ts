import React from 'react';

export interface MinaHeartHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartHome(props: MinaHeartHomeProps): React.ReactElement;
export default MinaHeartHome;
