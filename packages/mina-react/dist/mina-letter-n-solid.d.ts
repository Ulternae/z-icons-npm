import React from 'react';

export interface MinaLetterNSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterNSolid(props: MinaLetterNSolidProps): React.ReactElement;
export default MinaLetterNSolid;
