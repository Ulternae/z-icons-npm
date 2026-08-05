import React from 'react';

export interface MinaLetterCProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterC(props: MinaLetterCProps): React.ReactElement;
export default MinaLetterC;
