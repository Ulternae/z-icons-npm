import React from 'react';

export interface CorePencilLineRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePencilLineRegularDuo(props: CorePencilLineRegularDuoProps): React.ReactElement;
export default CorePencilLineRegularDuo;
