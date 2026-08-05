import React from 'react';

export interface MinaLetterQSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterQSolid(props: MinaLetterQSolidProps): React.ReactElement;
export default MinaLetterQSolid;
