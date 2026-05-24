import React from 'react';

export interface BruHireAHelperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHireAHelper: React.FC<BruHireAHelperProps>;
export default BruHireAHelper;
