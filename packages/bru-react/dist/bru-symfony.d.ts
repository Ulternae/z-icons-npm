import React from 'react';

export interface BruSymfonyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSymfony(props: BruSymfonyProps): React.ReactElement;
export default BruSymfony;
