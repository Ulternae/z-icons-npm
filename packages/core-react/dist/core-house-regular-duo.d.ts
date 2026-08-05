import React from 'react';

export interface CoreHouseRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHouseRegularDuo(props: CoreHouseRegularDuoProps): React.ReactElement;
export default CoreHouseRegularDuo;
