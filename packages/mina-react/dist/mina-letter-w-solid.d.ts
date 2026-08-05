import React from 'react';

export interface MinaLetterWSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterWSolid(props: MinaLetterWSolidProps): React.ReactElement;
export default MinaLetterWSolid;
