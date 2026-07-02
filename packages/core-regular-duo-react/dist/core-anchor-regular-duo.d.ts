import React from 'react';

export interface CoreAnchorRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAnchorRegularDuo(props: CoreAnchorRegularDuoProps): React.ReactElement;
export default CoreAnchorRegularDuo;
