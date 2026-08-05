import React from 'react';

export interface MinaMaximizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMaximize(props: MinaMaximizeProps): React.ReactElement;
export default MinaMaximize;
