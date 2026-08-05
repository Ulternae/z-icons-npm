import React from 'react';

export interface CoreBoxRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBoxRegularDuo(props: CoreBoxRegularDuoProps): React.ReactElement;
export default CoreBoxRegularDuo;
