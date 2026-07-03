import React from 'react';

export interface BruGruntProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGrunt(props: BruGruntProps): React.ReactElement;
export default BruGrunt;
