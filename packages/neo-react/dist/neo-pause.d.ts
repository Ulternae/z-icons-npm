import React from 'react';

export interface NeoPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPause(props: NeoPauseProps): React.ReactElement;
export default NeoPause;
