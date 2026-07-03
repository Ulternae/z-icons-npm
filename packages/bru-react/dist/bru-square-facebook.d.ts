import React from 'react';

export interface BruSquareFacebookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareFacebook(props: BruSquareFacebookProps): React.ReactElement;
export default BruSquareFacebook;
