import React from 'react';

export interface CorePencilRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePencilRegularDuo(props: CorePencilRegularDuoProps): React.ReactElement;
export default CorePencilRegularDuo;
