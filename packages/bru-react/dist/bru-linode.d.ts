import React from 'react';

export interface BruLinodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLinode(props: BruLinodeProps): React.ReactElement;
export default BruLinode;
