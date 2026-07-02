import React from 'react';

export interface CoreBellRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBellRegularDuo(props: CoreBellRegularDuoProps): React.ReactElement;
export default CoreBellRegularDuo;
