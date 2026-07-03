import React from 'react';

export interface BruYelpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruYelp(props: BruYelpProps): React.ReactElement;
export default BruYelp;
