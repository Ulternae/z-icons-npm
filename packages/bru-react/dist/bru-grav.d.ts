import React from 'react';

export interface BruGravProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGrav(props: BruGravProps): React.ReactElement;
export default BruGrav;
