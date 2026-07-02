import React from 'react';

export interface CoreGaugeLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGaugeLow(props: CoreGaugeLowProps): React.ReactElement;
export default CoreGaugeLow;
