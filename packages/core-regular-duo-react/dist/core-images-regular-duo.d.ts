import React from 'react';

export interface CoreImagesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreImagesRegularDuo(props: CoreImagesRegularDuoProps): React.ReactElement;
export default CoreImagesRegularDuo;
