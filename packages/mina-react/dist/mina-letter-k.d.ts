import React from 'react';

export interface MinaLetterKProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterK(props: MinaLetterKProps): React.ReactElement;
export default MinaLetterK;
