import React from 'react';

export interface BruHireAHelperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHireAHelper(props: BruHireAHelperProps): React.ReactElement;
export default BruHireAHelper;
