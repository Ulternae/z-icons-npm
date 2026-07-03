import React from 'react';

export interface BruWoduProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWodu(props: BruWoduProps): React.ReactElement;
export default BruWodu;
