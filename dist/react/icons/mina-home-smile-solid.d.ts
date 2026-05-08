import React from 'react';

export interface MinaHomeSmileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHomeSmileSolid: React.FC<MinaHomeSmileSolidProps>;
export default MinaHomeSmileSolid;
