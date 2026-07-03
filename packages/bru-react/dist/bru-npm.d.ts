import React from 'react';

export interface BruNpmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNpm(props: BruNpmProps): React.ReactElement;
export default BruNpm;
