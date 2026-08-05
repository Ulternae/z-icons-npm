import React from 'react';

export interface MinaLetterYSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterYSolid(props: MinaLetterYSolidProps): React.ReactElement;
export default MinaLetterYSolid;
