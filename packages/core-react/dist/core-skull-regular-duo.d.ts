import React from 'react';

export interface CoreSkullRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSkullRegularDuo(props: CoreSkullRegularDuoProps): React.ReactElement;
export default CoreSkullRegularDuo;
