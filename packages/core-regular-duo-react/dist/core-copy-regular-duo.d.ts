import React from 'react';

export interface CoreCopyRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCopyRegularDuo(props: CoreCopyRegularDuoProps): React.ReactElement;
export default CoreCopyRegularDuo;
