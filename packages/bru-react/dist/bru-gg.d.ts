import React from 'react';

export interface BruGgProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGg(props: BruGgProps): React.ReactElement;
export default BruGg;
