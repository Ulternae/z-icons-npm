import React from 'react';

export interface MinaAtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAt(props: MinaAtProps): React.ReactElement;
export default MinaAt;
