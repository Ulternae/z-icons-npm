import React from 'react';

export interface BruMedrtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMedrt(props: BruMedrtProps): React.ReactElement;
export default BruMedrt;
