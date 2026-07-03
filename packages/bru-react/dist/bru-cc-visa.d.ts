import React from 'react';

export interface BruCcVisaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCcVisa(props: BruCcVisaProps): React.ReactElement;
export default BruCcVisa;
