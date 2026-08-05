import React from 'react';

export interface MinaLetterISolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterISolid(props: MinaLetterISolidProps): React.ReactElement;
export default MinaLetterISolid;
