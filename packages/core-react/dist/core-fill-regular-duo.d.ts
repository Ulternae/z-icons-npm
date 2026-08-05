import React from 'react';

export interface CoreFillRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFillRegularDuo(props: CoreFillRegularDuoProps): React.ReactElement;
export default CoreFillRegularDuo;
