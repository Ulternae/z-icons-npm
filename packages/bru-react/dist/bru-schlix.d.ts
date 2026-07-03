import React from 'react';

export interface BruSchlixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSchlix(props: BruSchlixProps): React.ReactElement;
export default BruSchlix;
