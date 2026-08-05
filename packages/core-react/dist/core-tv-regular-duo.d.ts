import React from 'react';

export interface CoreTvRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTvRegularDuo(props: CoreTvRegularDuoProps): React.ReactElement;
export default CoreTvRegularDuo;
