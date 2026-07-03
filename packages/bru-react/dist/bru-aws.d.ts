import React from 'react';

export interface BruAwsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAws(props: BruAwsProps): React.ReactElement;
export default BruAws;
