import React from 'react';

export interface CoreDisplayRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDisplayRegularDuo(props: CoreDisplayRegularDuoProps): React.ReactElement;
export default CoreDisplayRegularDuo;
