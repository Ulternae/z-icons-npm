import React from 'react';

export interface BruRustProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRust(props: BruRustProps): React.ReactElement;
export default BruRust;
