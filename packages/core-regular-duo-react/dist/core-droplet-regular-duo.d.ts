import React from 'react';

export interface CoreDropletRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDropletRegularDuo(props: CoreDropletRegularDuoProps): React.ReactElement;
export default CoreDropletRegularDuo;
