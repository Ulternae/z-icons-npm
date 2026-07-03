import React from 'react';

export interface BruGolangProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGolang(props: BruGolangProps): React.ReactElement;
export default BruGolang;
