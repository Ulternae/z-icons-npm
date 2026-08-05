import React from 'react';

export interface MinaLetterXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterXSolid(props: MinaLetterXSolidProps): React.ReactElement;
export default MinaLetterXSolid;
