import React from 'react';

export interface MinaLetterWOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterWOctagonSolid(props: MinaLetterWOctagonSolidProps): React.ReactElement;
export default MinaLetterWOctagonSolid;
