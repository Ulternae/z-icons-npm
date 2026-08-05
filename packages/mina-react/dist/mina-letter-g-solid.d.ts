import React from 'react';

export interface MinaLetterGSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterGSolid(props: MinaLetterGSolidProps): React.ReactElement;
export default MinaLetterGSolid;
