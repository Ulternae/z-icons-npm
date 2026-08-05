import React from 'react';

export interface CoreGrid2RegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGrid2RegularDuo(props: CoreGrid2RegularDuoProps): React.ReactElement;
export default CoreGrid2RegularDuo;
