import React from 'react';

export interface CoreMapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMap(props: CoreMapProps): React.ReactElement;
export default CoreMap;
