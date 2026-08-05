import React from 'react';

export interface MinaLetterLSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterLSolid(props: MinaLetterLSolidProps): React.ReactElement;
export default MinaLetterLSolid;
