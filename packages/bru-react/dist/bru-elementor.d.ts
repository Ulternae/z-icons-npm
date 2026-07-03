import React from 'react';

export interface BruElementorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruElementor(props: BruElementorProps): React.ReactElement;
export default BruElementor;
