import React from 'react';

export interface CoreTrophyRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTrophyRegularDuo(props: CoreTrophyRegularDuoProps): React.ReactElement;
export default CoreTrophyRegularDuo;
