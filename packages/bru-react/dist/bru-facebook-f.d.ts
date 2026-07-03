import React from 'react';

export interface BruFacebookFProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFacebookF(props: BruFacebookFProps): React.ReactElement;
export default BruFacebookF;
