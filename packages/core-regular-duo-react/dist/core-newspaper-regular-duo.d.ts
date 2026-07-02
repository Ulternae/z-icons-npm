import React from 'react';

export interface CoreNewspaperRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreNewspaperRegularDuo(props: CoreNewspaperRegularDuoProps): React.ReactElement;
export default CoreNewspaperRegularDuo;
