import React from 'react';

export interface BruScalewayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruScaleway(props: BruScalewayProps): React.ReactElement;
export default BruScaleway;
