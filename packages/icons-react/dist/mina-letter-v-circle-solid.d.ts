import React from 'react';

export interface MinaLetterVCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVCircleSolid: React.FC<MinaLetterVCircleSolidProps>;
export default MinaLetterVCircleSolid;
