import React from 'react';

export interface BruHipsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHips(props: BruHipsProps): React.ReactElement;
export default BruHips;
