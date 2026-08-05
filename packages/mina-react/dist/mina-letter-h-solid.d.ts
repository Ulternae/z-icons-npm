import React from 'react';

export interface MinaLetterHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterHSolid(props: MinaLetterHSolidProps): React.ReactElement;
export default MinaLetterHSolid;
