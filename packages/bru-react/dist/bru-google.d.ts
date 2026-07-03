import React from 'react';

export interface BruGoogleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGoogle(props: BruGoogleProps): React.ReactElement;
export default BruGoogle;
