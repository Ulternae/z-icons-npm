import React from 'react';

export interface MinaLetterASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterASolid(props: MinaLetterASolidProps): React.ReactElement;
export default MinaLetterASolid;
