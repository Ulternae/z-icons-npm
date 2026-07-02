import React from 'react';

export interface CoreKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreKey(props: CoreKeyProps): React.ReactElement;
export default CoreKey;
