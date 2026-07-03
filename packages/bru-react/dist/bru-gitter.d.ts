import React from 'react';

export interface BruGitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGitter(props: BruGitterProps): React.ReactElement;
export default BruGitter;
