import React from 'react';

export interface MinaLetterKSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterKSolid(props: MinaLetterKSolidProps): React.ReactElement;
export default MinaLetterKSolid;
