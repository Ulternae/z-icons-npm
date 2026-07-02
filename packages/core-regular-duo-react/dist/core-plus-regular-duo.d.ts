import React from 'react';

export interface CorePlusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlusRegularDuo(props: CorePlusRegularDuoProps): React.ReactElement;
export default CorePlusRegularDuo;
