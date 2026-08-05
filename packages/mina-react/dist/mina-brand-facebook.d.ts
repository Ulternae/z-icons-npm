import React from 'react';

export interface MinaBrandFacebookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandFacebook(props: MinaBrandFacebookProps): React.ReactElement;
export default MinaBrandFacebook;
