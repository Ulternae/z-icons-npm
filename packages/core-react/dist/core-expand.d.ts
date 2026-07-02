import React from 'react';

export interface CoreExpandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreExpand(props: CoreExpandProps): React.ReactElement;
export default CoreExpand;
