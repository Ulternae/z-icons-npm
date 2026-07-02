import React from 'react';

export interface CoreGridRoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGridRoundSolid(props: CoreGridRoundSolidProps): React.ReactElement;
export default CoreGridRoundSolid;
