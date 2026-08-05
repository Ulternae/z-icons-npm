import React from 'react';

export interface CoreXmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreXmarkRegularDuo(props: CoreXmarkRegularDuoProps): React.ReactElement;
export default CoreXmarkRegularDuo;
