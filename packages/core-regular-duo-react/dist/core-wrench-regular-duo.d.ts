import React from 'react';

export interface CoreWrenchRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWrenchRegularDuo(props: CoreWrenchRegularDuoProps): React.ReactElement;
export default CoreWrenchRegularDuo;
