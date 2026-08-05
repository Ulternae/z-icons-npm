import React from 'react';

export interface NeoBedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBed(props: NeoBedProps): React.ReactElement;
export default NeoBed;
