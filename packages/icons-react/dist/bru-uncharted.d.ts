import React from 'react';

export interface BruUnchartedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUncharted: React.FC<BruUnchartedProps>;
export default BruUncharted;
