import React from 'react';

export interface NeoBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBolt(props: NeoBoltProps): React.ReactElement;
export default NeoBolt;
