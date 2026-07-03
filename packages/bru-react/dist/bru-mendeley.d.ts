import React from 'react';

export interface BruMendeleyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMendeley(props: BruMendeleyProps): React.ReactElement;
export default BruMendeley;
