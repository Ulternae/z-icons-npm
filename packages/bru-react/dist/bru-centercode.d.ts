import React from 'react';

export interface BruCentercodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCentercode(props: BruCentercodeProps): React.ReactElement;
export default BruCentercode;
