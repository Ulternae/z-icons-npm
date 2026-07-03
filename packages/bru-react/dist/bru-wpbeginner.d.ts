import React from 'react';

export interface BruWpbeginnerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWpbeginner(props: BruWpbeginnerProps): React.ReactElement;
export default BruWpbeginner;
