import React from 'react';

export interface MinaNavigationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNavigation(props: MinaNavigationProps): React.ReactElement;
export default MinaNavigation;
