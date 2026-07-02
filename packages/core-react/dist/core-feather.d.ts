import React from 'react';

export interface CoreFeatherProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFeather(props: CoreFeatherProps): React.ReactElement;
export default CoreFeather;
