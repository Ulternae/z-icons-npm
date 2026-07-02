import React from 'react';

export interface CoreSkullCrossbonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSkullCrossbones(props: CoreSkullCrossbonesProps): React.ReactElement;
export default CoreSkullCrossbones;
