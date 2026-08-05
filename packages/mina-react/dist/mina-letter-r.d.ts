import React from 'react';

export interface MinaLetterRProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterR(props: MinaLetterRProps): React.ReactElement;
export default MinaLetterR;
