import React from 'react';

export interface BruGooglePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGooglePlus(props: BruGooglePlusProps): React.ReactElement;
export default BruGooglePlus;
