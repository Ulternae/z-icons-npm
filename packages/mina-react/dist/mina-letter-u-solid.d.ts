import React from 'react';

export interface MinaLetterUSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterUSolid(props: MinaLetterUSolidProps): React.ReactElement;
export default MinaLetterUSolid;
