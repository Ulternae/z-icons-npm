import React from 'react';

export interface CoreFileRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFileRegularDuo(props: CoreFileRegularDuoProps): React.ReactElement;
export default CoreFileRegularDuo;
