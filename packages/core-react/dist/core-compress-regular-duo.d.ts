import React from 'react';

export interface CoreCompressRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCompressRegularDuo(props: CoreCompressRegularDuoProps): React.ReactElement;
export default CoreCompressRegularDuo;
