import React from 'react';

export interface BruJogetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruJoget(props: BruJogetProps): React.ReactElement;
export default BruJoget;
