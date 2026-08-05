import React from 'react';

export interface MinaLetterJSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterJSolid(props: MinaLetterJSolidProps): React.ReactElement;
export default MinaLetterJSolid;
