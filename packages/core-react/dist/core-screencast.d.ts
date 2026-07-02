import React from 'react';

export interface CoreScreencastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreScreencast(props: CoreScreencastProps): React.ReactElement;
export default CoreScreencast;
