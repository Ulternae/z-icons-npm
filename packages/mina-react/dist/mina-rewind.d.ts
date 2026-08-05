import React from 'react';

export interface MinaRewindProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewind(props: MinaRewindProps): React.ReactElement;
export default MinaRewind;
