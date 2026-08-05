import React from 'react';

export interface MinaLetterMProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterM(props: MinaLetterMProps): React.ReactElement;
export default MinaLetterM;
