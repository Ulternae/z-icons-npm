import React from 'react';

export interface MinaLetterCSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterCSolid(props: MinaLetterCSolidProps): React.ReactElement;
export default MinaLetterCSolid;
