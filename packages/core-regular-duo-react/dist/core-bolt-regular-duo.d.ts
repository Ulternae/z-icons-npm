import React from 'react';

export interface CoreBoltRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBoltRegularDuo(props: CoreBoltRegularDuoProps): React.ReactElement;
export default CoreBoltRegularDuo;
