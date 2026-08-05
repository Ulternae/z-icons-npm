import React from 'react';

export interface CoreLinkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLinkRegularDuo(props: CoreLinkRegularDuoProps): React.ReactElement;
export default CoreLinkRegularDuo;
