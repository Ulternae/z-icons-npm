import React from 'react';

export interface MinaLetterBSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterBSolid(props: MinaLetterBSolidProps): React.ReactElement;
export default MinaLetterBSolid;
