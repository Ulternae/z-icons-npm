import React from 'react';

export interface BruAudibleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAudible(props: BruAudibleProps): React.ReactElement;
export default BruAudible;
