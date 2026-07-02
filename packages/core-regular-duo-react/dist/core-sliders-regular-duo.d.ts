import React from 'react';

export interface CoreSlidersRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSlidersRegularDuo(props: CoreSlidersRegularDuoProps): React.ReactElement;
export default CoreSlidersRegularDuo;
