import React from 'react';

export interface NeoBombProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBomb(props: NeoBombProps): React.ReactElement;
export default NeoBomb;
