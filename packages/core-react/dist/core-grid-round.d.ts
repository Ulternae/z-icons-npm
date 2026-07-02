import React from 'react';

export interface CoreGridRoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGridRound(props: CoreGridRoundProps): React.ReactElement;
export default CoreGridRound;
