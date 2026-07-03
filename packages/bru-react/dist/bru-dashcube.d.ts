import React from 'react';

export interface BruDashcubeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDashcube(props: BruDashcubeProps): React.ReactElement;
export default BruDashcube;
