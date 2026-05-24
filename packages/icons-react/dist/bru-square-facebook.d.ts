import React from 'react';

export interface BruSquareFacebookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareFacebook: React.FC<BruSquareFacebookProps>;
export default BruSquareFacebook;
