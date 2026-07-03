import React from 'react';

export interface BruGulpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGulp(props: BruGulpProps): React.ReactElement;
export default BruGulp;
