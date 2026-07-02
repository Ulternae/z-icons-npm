import React from 'react';

export interface CoreScreencastRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreScreencastRegularDuo(props: CoreScreencastRegularDuoProps): React.ReactElement;
export default CoreScreencastRegularDuo;
