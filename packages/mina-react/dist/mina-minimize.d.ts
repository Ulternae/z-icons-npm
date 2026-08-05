import React from 'react';

export interface MinaMinimizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinimize(props: MinaMinimizeProps): React.ReactElement;
export default MinaMinimize;
