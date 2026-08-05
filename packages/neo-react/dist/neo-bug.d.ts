import React from 'react';

export interface NeoBugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBug(props: NeoBugProps): React.ReactElement;
export default NeoBug;
