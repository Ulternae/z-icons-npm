import React from 'react';

export interface MinaBrandFacebookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandFacebook: React.FC<MinaBrandFacebookProps>;
export default MinaBrandFacebook;
