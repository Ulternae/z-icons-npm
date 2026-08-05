import React from 'react';

export interface NeoBarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBars(props: NeoBarsProps): React.ReactElement;
export default NeoBars;
