import React from 'react';

export interface BruCcMastercardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCcMastercard(props: BruCcMastercardProps): React.ReactElement;
export default BruCcMastercard;
