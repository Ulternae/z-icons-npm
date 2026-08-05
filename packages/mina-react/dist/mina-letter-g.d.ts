import React from 'react';

export interface MinaLetterGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterG(props: MinaLetterGProps): React.ReactElement;
export default MinaLetterG;
