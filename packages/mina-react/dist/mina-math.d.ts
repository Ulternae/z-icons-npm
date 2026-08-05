import React from 'react';

export interface MinaMathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMath(props: MinaMathProps): React.ReactElement;
export default MinaMath;
