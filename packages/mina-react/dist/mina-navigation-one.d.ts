import React from 'react';

export interface MinaNavigationOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNavigationOne(props: MinaNavigationOneProps): React.ReactElement;
export default MinaNavigationOne;
