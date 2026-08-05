import React from 'react';

export interface MinaLetterRSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterRSolid(props: MinaLetterRSolidProps): React.ReactElement;
export default MinaLetterRSolid;
