import React from 'react';

export interface CoreCheckRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCheckRegularDuo(props: CoreCheckRegularDuoProps): React.ReactElement;
export default CoreCheckRegularDuo;
