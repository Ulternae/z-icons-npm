import React from 'react';

export interface MinaLetterWProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterW(props: MinaLetterWProps): React.ReactElement;
export default MinaLetterW;
