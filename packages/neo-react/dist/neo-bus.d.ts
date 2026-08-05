import React from 'react';

export interface NeoBusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBus(props: NeoBusProps): React.ReactElement;
export default NeoBus;
