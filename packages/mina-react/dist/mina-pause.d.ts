import React from 'react';

export interface MinaPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPause(props: MinaPauseProps): React.ReactElement;
export default MinaPause;
