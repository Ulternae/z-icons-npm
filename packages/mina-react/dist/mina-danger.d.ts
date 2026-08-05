import React from 'react';

export interface MinaDangerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDanger(props: MinaDangerProps): React.ReactElement;
export default MinaDanger;
