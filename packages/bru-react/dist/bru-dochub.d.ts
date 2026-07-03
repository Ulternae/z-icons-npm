import React from 'react';

export interface BruDochubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDochub(props: BruDochubProps): React.ReactElement;
export default BruDochub;
