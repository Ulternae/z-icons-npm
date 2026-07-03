import React from 'react';

export interface BruFacebookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFacebook(props: BruFacebookProps): React.ReactElement;
export default BruFacebook;
