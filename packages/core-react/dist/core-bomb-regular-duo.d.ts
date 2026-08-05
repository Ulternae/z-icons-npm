import React from 'react';

export interface CoreBombRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBombRegularDuo(props: CoreBombRegularDuoProps): React.ReactElement;
export default CoreBombRegularDuo;
