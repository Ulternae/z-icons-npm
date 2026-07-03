import React from 'react';

export interface BruGooglePlusGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGooglePlusG(props: BruGooglePlusGProps): React.ReactElement;
export default BruGooglePlusG;
