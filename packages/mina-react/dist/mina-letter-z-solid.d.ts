import React from 'react';

export interface MinaLetterZSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterZSolid(props: MinaLetterZSolidProps): React.ReactElement;
export default MinaLetterZSolid;
