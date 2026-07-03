import React from 'react';

export interface BruUnchartedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUncharted(props: BruUnchartedProps): React.ReactElement;
export default BruUncharted;
