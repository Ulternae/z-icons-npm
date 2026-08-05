import React from 'react';

export interface MinaBathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBath(props: MinaBathProps): React.ReactElement;
export default MinaBath;
