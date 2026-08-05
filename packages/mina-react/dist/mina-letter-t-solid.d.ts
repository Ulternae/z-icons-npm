import React from 'react';

export interface MinaLetterTSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterTSolid(props: MinaLetterTSolidProps): React.ReactElement;
export default MinaLetterTSolid;
