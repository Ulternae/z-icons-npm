import React from 'react';

export interface BruUniregistryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUniregistry(props: BruUniregistryProps): React.ReactElement;
export default BruUniregistry;
