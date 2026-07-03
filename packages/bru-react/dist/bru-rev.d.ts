import React from 'react';

export interface BruRevProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRev(props: BruRevProps): React.ReactElement;
export default BruRev;
