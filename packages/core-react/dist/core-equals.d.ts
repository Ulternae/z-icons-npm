import React from 'react';

export interface CoreEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEquals(props: CoreEqualsProps): React.ReactElement;
export default CoreEquals;
