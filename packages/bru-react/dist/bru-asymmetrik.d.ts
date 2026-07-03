import React from 'react';

export interface BruAsymmetrikProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAsymmetrik(props: BruAsymmetrikProps): React.ReactElement;
export default BruAsymmetrik;
